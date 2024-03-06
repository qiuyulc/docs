import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "秋雨不良人",
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
        text: "前端基础",
        children: [
          // {
          //   text: "HTML",
          //   link: "/html/introduction",
          // },
          {
            text: "TypeScript",
            link: "/typescript/1_introduction",
          },
        ],
      },

      // {
      //   text: "服务端",
      //   children: [
      //     {
      //       text: "NestJs",
      //       link: "/nestjs/introduction",
      //     },
      //   ],
      // },
      {
        text: "面试题",
        children: [
          {
            text: "前端常识",
            link: "/interview/web/basics",
          },
          {
            text: "React",
            link: "/interview/react_interview/basics",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/qiuyulc/blog",
      },
    ],
    sidebar: {
      // "/html/": [
      //   {
      //     text: "基础",
      //     collapsible: true,
      //     children: [
      //       "/html/introduction", //简介
      //       "/html/base-elements", //基础元素
      //     ],
      //   },
      // ],
      "/typescript/": [
        {
          text: "TypeScript",
          collapsible: true,
          children: [
            "/typescript/1_introduction",
            "/typescript/2_basic_usage",
            "/typescript/3_any",
            "/typescript/4_type_system",
            "/typescript/5_array",
            "/typescript/6_tuple",
            "/typescript/7_symbol",
            "/typescript/8_function",
          ],
        },
      ],
      "/interview/": [
        // {
        //   text: "面试题",
        //   collapsible: true,
        //   children: [""],
        // },
        "/interview/web/basics",
        "/interview/react_interview/basics",
      ],
      "/nestjs/": [
        {
          text: "介绍",
          link: "/nestjs/introduction",
        },
        {
          collapsible: true,
          text: "概述",
          children: ["/nestjs/basic", "/nestjs/controllers"],
        },
      ],
      // "/html/introduction", "/html/base-elements"
      //   {
      //         text: "HTML",
      //         link: "/html",
      //         children: [
      //             {
      //                 text: "认识HTML",
      //                 link: "/html/introduction",
      //             },
      //             {
      //                 text: "基础元素",
      //                 link: "/html/base-elements",
      //             },
      //         ],
      //     },
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
