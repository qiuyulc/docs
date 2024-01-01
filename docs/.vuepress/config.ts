import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "前端学习记录",
  description: "前端学习复习路线图",
  theme: defaultTheme({
    // 默认主题配置
    home: "/",
    notFound: ["峰回路转多歧路,你走丢了哦！"],
    backToHome: "返回首页",
    navbar: [
      {
        text: "前端基础",
        children: [
          {
            text: "html",
            link: "/html/introduction",
          },
        ],
      },
    ],
    sidebar: {
      "/html/": [
        {
          text: "基础",
          collapsible: true,
          children: ["/html/introduction", "/html/base-elements"],
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
});
