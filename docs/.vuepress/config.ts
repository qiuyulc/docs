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
      {
        text: "Promise",
        link: "/promise/1",
      },
      {
        text: "设计模式",
        link: "/design_patterns/01",
      },
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
          {
            text: "pixi",
            link: "/other/pixi/01",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/qiuyulc/blog",
      },
    ],
    sidebar: {
      "/promise/": ["/promise/1", "/promise/2"],
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
      ],
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
      "/other/pixi": [
        {
          text: "pixi",
          collapsible: true,
          children: ["/other/pixi/01", "/other/pixi/02"],
        },
      ],
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
