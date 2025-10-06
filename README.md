# Anystat 文档网站

这是Anystat数据分析助手的官方文档网站，使用VitePress + GitHub Pages构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run docs:dev
```

然后打开浏览器访问 http://localhost:5173/Anystat_doc_web.github.io/

### 构建文档

```bash
npm run docs:build
```

构建后的文件将生成在 `docs/.vitepress/dist` 目录下。

### 预览构建结果

```bash
npm run docs:preview
```

## 部署到GitHub Pages

1. 构建文档：
   ```bash
   npm run docs:build
   ```

2. 将构建后的 `docs/.vitepress/dist` 目录内容发布到GitHub Pages。

## 文档结构

- `docs/`: VitePress文档目录
  - `.vitepress/`: VitePress配置目录
  - `tutorial/`: 教程文档子目录
  - `images/`: 图片资源目录
  - `index.md`: 首页文档
  - `installation.md`: 安装部署文档
  - `tutorial.md`: 教程主文档
  - `examples.md`: 使用示例文档
  - `resources.md`: 相关资源文档

## 贡献指南

如需贡献文档，请按照以下步骤操作：

1. Fork本仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 提交Pull Request

## 许可证

本项目采用MIT许可证。
