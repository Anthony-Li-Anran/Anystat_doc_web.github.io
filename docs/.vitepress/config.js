export default {
  title: 'Anystat 文档',
  description: '零基础入门指南：Anystat 可视化数据分析 Agent 使用手册',
  base: '/Anystat_doc_web.github.io/',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '安装部署', link: '/installation' },
      { text: '使用教程', link: '/tutorial' },
      { text: '使用示例', link: '/examples' },
      { text: '相关资源', link: '/resources' }
    ],
    sidebar: {
      '/': [
        { text: 'Anystat简介', link: '/' },
        { text: '安装部署', link: '/installation' },
        { 
          text: '教程与展示', 
          link: '/tutorial',
          children: [
            { text: '首次启动与API配置', link: '/tutorial/startup' },
            { text: '数据导入模块', link: '/tutorial/data-import' },
            { text: '数据预处理模块', link: '/tutorial/data-preprocessing' },
            { text: '数据可视化模块', link: '/tutorial/data-visualization' },
            { text: '数据建模模块', link: '/tutorial/data-modeling' },
            { text: '报告生成模块', link: '/tutorial/report-generation' }
          ]
        },
        { text: '使用示例', link: '/examples' },
        { text: '相关资源', link: '/resources' }
      ]
    },
    footer: {
      copyright: '© 2025 Anystat. All rights reserved.'
    }
  }
}