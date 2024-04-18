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
      {
        text:'JavaScript',
        children:[
          {
            text:'现代js教程',
            link:'/javascript/01'
          }
        ]
      },
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
        text: "培训机构课程",
        children: [
          {
            text: "拉钩教育",
            link: "/training-course/lg/basic",
          },
        ],
      },
      {
        text:'其他',
        children:[
          {
            text:'pixi',
            link:'/other/pixi/01'
          }
        ]
      },
      {
        text: "Github",
        link: "https://github.com/qiuyulc/blog",
      },
    ],
    sidebar: {
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
      "/javascript/":[
        "/javascript/01"
      ],
      "/interview/": [
        // {
        //   text: "面试题",
        //   collapsible: true,
        //   children: [""],
        // },
        "/interview/web/basics",
        "/interview/react_interview/basics",
        "/interview/redux/basics",
        "/interview/react_router/basics",
      ],
      "/training-course/": [
        {
          text: "拉钩教育",
          collapsible: true,
          children: [
            {
              text: "大前端高薪修炼营",
              link: "/training-course/lg/basic",
            },
            {
              text: "JavaScript 深度剖析",
              collapsible: true,
              children: [
                "/training-course/lg/js/func",
                "/training-course/lg/js/async",
                "/training-course/lg/js/promise",
              ],
            },
          ],
        },
      ],
      "/other/pixi":[
        {
          text:'pixi',
          collapsible:true,
          children:[
            '/other/pixi/01',
            '/other/pixi/02'
          ]
        }
      ]
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
