#!/user/bin/env node

// 安装 inquirer commander
// 1:42:10
const inquirer = require('inquirer');
const commander = require('commander');

const { runImg } = require('./img.handler');

const question = [
    {
        type: 'checkbox',
        name: 'channels',
        message: '请选择要搜索的渠道',
        choices: [
            {
                name: '百度图片',
                value: 'images'
            }
        ]
    },
    {
        type: 'input',
        name: 'keyword',
        message: '请输出想要搜索的关键字'
    }, {
        type: 'number',
        name: 'counts',
        message: '请输入要下载的图片的数量（最少为30张）'
    }
]

inquirer.prompt(question).then(result => {
    const { channels, keyword } = result;
    for (let channel of channels) {
        switch (channel) {
            case 'images':
                runImg(keyword)
                break
        }
    }
})