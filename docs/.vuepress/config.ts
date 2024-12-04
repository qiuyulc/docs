import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "秋雨",
  description: "我与旧事归于尽，今年依旧花盛开。",

  theme: defaultTheme({
    lastUpdatedText: "最后更新",
    contributorsText: "贡献者",
    // 默认主题配置
    home: "/",
    notFound: ["峰回路转多歧路,你走丢了哦！"],
    backToHome: "返回首页",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text:'前端三剑客',
        children:[
          {
            text:'HTML',
            link:'/web/html/01'
          },
          {
            text:'CSS',
            link:'/web/css/01'
          },
          {
            text:'JavaScript',
            link:'/web/js/01'
          }
        ]
      },

      // {
      //   text: "前端基础",
      //   children: [
      //     // {
      //     //   text: "TypeScript",
      //     //   link: "/typescript/1_introduction",
      //     // },
      //   ],
      // },
      // {
      //   text: "NextJS",
      //   link: "/nextjs/basics",
      // },
      // {
      //   text:'JavaScript',
      //   children:[
      //     {
      //       text:'现代js教程',
      //       link:'/javascript/01'
      //     }
      //   ]
      // },

      // {
      //   text: "前端",
      //   link:"/training-course/lg/js/func"
      // },
      // {
      //   text: "实战",
      //   link: "/actual-combat/node/node-reptile",
      // },
      // {
      //   text: "Promise",
      //   link: "/promise/1",
      // },
      // {
      //   text:"Less",
      //   link:"/less/1"
      // },
      {
        text: "设计模式",
        link: "/design_patterns/01",
      },
      // {
      //   text: "算法",
      //   link: "/algorithm/1",
      // },
      {
        text: "webpack",
        link: "/webpack/1",
      },
      {
        text: "面试题",
        children: [
          {
            text: "前端常识",
            link: "/interview/web/basics",
          },
          {
            text: "ES",
            link: "/interview/es6/basics",
          },
          {
            text: "React",
            link: "/interview/react_interview/basics",
          },
          {
            text: "Redux",
            link: "/interview/redux/basics",
          },
          {
            text: "ReactRouter",
            link: "/interview/react_router/basics",
          },
        ],
      },
      {
        text: "其他",
        children: [
          // {
          //   text: "pixi",
          //   link: "/other/pixi/01",
          // },
          {
            text: "App",
            link: "/app/01",
          },
          // {
          //   text:'HTTP',
          //   link:'/web/http/01'
          // },
          // {
          //   text:'计算机网络',
          //   link:'/network/01'
          // }
        ],
      },
      {
        text: "Github",
        link: "https://github.com/qiuyulc/blog",
      },
    ],
    sidebar: {
      "/promise/": ["/promise/1", "/promise/2"],
      "/less/": ["/less/1", "/less/2"],
      "/algorithm/":["/algorithm/1"],
      "/web/html":['/web/html/01','/web/html/02','/web/html/03','/web/html/04','/web/html/05','/web/html/06'],
      "/web/css":['/web/css/01','/web/css/02','/web/css/03','/web/css/04','/web/css/05','/web/css/06'],
      "/web/js":["/web/js/01"],
      "/webpack/": [
        "/webpack/1",
        "/webpack/2",
        "/webpack/3",
        "/webpack/4",
        "/webpack/5",
        "/webpack/6",
        "/webpack/7",
        "/webpack/8",
        "/webpack/9",
        "/webpack/10",
        "/webpack/11",
        "/webpack/12",
        "/webpack/13",
        "/webpack/14",
        "/webpack/15",
        "/webpack/16",
        "/webpack/17",
        "/webpack/18",
        "/webpack/19",
        "/webpack/20",
        "/webpack/21",
        "/webpack/22",
        "/webpack/23",
        "/webpack/24",
        "/webpack/25",
        "/webpack/26",
        "/webpack/27",
        "/webpack/28",
      ],
      // "/network/":["/network/01"],
      "/web/http":["/web/http/01"],
      "/app/":['/app/01','/app/02'],
      "/design_patterns/": [
        "/design_patterns/01",
        "/design_patterns/02",
        "/design_patterns/03",
        "/design_patterns/04",
        "/design_patterns/05",
        "/design_patterns/06",
        "/design_patterns/07",
        "/design_patterns/08",
        "/design_patterns/09",
        "/design_patterns/10",
        "/design_patterns/11",
        "/design_patterns/12",
        "/design_patterns/13",
        "/design_patterns/14",
        "/design_patterns/15",
        "/design_patterns/16",
        "/design_patterns/17",
        "/design_patterns/18",
        "/design_patterns/19",
      ],
      // "/typescript/": [
      //   {
      //     text: "TypeScript",
      //     collapsible: true,
      //     children: [
      //       "/typescript/1_introduction",
      //       "/typescript/2_basic_usage",
      //       "/typescript/3_any",
      //       "/typescript/4_type_system",
      //       "/typescript/5_array",
      //       "/typescript/6_tuple",
      //       "/typescript/7_symbol",
      //       "/typescript/8_function",
      //       "/typescript/9_object",
      //       "/typescript/10_interface",
      //     ],
      //   },
      // ],
      "/javascript/": ["/javascript/01"],
      "/interview/": [
        // {
        //   text: "面试题",
        //   collapsible: true,
        //   children: [""],
        // },
        "/interview/web/basics",
        "/interview/es6/basics",
        "/interview/react_interview/basics",
        "/interview/redux/basics",
        "/interview/react_router/basics",
      ],
      "/actual-combat/": ["/actual-combat/node/node-reptile"],
      // "/other/pixi": [
      //   {
      //     text: "pixi",
      //     collapsible: true,
      //     children: ["/other/pixi/01", "/other/pixi/02"],
      //   },
      // ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
