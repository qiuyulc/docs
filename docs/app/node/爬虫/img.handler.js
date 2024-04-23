const superagent = require("superagent");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const CliProgress = require("cli-progress");

const bar = new CliProgress.SingleBar(
  {
    clearOnComplete: false,
  },
  CliProgress.Presets.shades_classic
);

let total = 0;
let finished = 0;
const word = "兰花";
const headers = {
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  Accept2: 'text/plain, */*; q=0.01',
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Cache-Control": "max-age=0",
  Connection: "keep-alive",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Sec-Ch-Ua":
    '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
};

function getValueListByReg(str, key) {
  const reg = new RegExp(`"${key}":"(.*?)"`, "g");
  const matchResult = str.match(reg);
  const resultList = matchResult.map((item) => {
    const result = item.match(/:"(.*?)"/g);
    return RegExp.$1;
  });
  return resultList;
}

function mkImageDir(pathname) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(__dirname, pathname);
    if (fs.existsSync(fullPath)) {
      removeDir(pathname);

    }
    fs.mkdirSync(fullPath);
    console.log(`目录创建成功，目录为${pathname}`);
    return resolve();
  });
}

function removeDir(pathname) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(__dirname, pathname);
    if (!fs.existsSync(fullPath)) {
      console.log(`${pathname}不存在，跳过此步骤`);
      return;
    }
    fs.rmdirSync(fullPath, { force: true, recursive: true });
    console.log(`目录删除成功，目录为${pathname}`);
    return resolve();
  })
}

function downloadImage(url, name, index) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(
      __dirname,
      "images",
      `${index + 1}.${name.replace("?", "")}.png`
    );
    if (fs.existsSync(fullPath)) {
      return reject(`图片已存在,${fullPath}`);
    }

    superagent.get(url).end((err, res) => {
      // console.log(res)
      if (err) {
        return reject(`获取链接出错，错误内容为：`, err);
      }

      if (JSON.stringify(res.body) === "{}") {

        return resolve(`第${index + 1}张图为空`);
      }

      fs.writeFile(fullPath, res.body, "binary", (err) => {
        //   console.log(err);
        if (err) {
          return resolve(`${index + 1}.${name.replace("?", "")}.png 下载失败`);
        }
        return resolve(`${index + 1}.${name.replace("?", "")}.png 下载成功`)
      });
    });
  })

}

//一般爬虫不会走https

function request(url, acceptKey = 'Accept') {
  return new Promise((resolve, reject) => {
    superagent
      .get(url)
      .set("Accept", headers[acceptKey])
      .set("Accept-Encoding", headers["Accept-Encoding"])
      .set("Accept-Language", headers["Accept-Language"])
      .set("Connection", headers["Connection"])
      .set("User-Agent", headers["User-Agent"])
      .set("Sec-Ch-Ua", headers["Sec-Ch-Ua"])
      .set("Cache-Control", headers["Cache-Control"])
      .end(async (err, res) => {
        if (err) {
          reject("错误原因是", err);
          return;
        }
        resolve(res);
      })
  })
}

async function getImagePage(start, total, word) {
  let allImages = [];
  while (start < total) {
    const size = Math.min(60, total - start);
    const res = await request(`
          https://image.baidu.com/search/acjson?
          tn=resultjson_com&word=${encodeURIComponent(word)}&queryWord=${encodeURIComponent(word)}&cl=2&lm=-1&ie=utf-8&oe=utf-8&pn=${start}&rn=${size}&gsm=${Date.now()}=`, 'Accept2')
    allImages = allImages.concat(JSON.parse(res.text).data);
    start += size;
  }
  console.log(allImages)
  return allImages;
}

function runImg(keyWord, counts) {
  request(`http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(
    keyWord
  )}&oq=${encodeURIComponent(keyWord)}`).then(async (res) => {

    const htmlText = res.text;

    const imageUrlList = getValueListByReg(htmlText, "thumbURL");
    const titleList = getValueListByReg(htmlText, "fromPageTitle");
    let allImageUrls = imageUrlList.map((imageUrl, index) => {
      return {
        imageUrl,
        title: titleList[index]
      }
    })

    const firstPageCount = allImageUrls.length;

    if (counts > firstPageCount) {
      const restImgUrls = await getImagePage(firstPageCount, counts, keyWord)
      const formarImgUrls = restImgUrls.filter(item => item.middleURL).map(item => {
        return {
          imgURL: Image.middleURL,
          title: item.fromPageTitle.replace('<strong>', '').replace('</strong>', '')
        }
      })
      allImageUrls = allImageUrls.concat(formarImgUrls)
    }
    total = imageUrlList.length;

    try {
      await mkImageDir("images");
      bar.start(total, 0)
      Promise.all(allImageUrls.map((item, index) => {
        return downloadImage(item.imageUrl, item.title, index)
          .then(() => {
            finished++;
            // console.log(`${finished} 图片下载成功`);
            bar.update(finished);
          })
          .catch(err => {
            console.error(err);
          });
      })).then(() => {
        if (finished === total) {
          bar.stop();
          console.log('恭喜，所有图片下载成功');
        }
      }).catch(err => {
        console.error('下载过程中发生错误', err);
      });
    } catch (err) {
      console.log('错误原因是', err);
    }
  });

  // https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111110&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E6%9F%AF%E5%9F%BA&oq=%E6%9F%AF%E5%9F%BA&rsp=-1

}

module.exports = {
  runImg
};