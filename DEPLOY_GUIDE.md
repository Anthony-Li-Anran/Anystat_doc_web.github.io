# Anystat 文档部署指南

本指南将逐步教您如何将本地预览的Anystat文档网站原封不动地部署到GitHub Pages上，包括详细的GitHub设置步骤。

## 前提条件

1. 确保您已经安装了Git和Node.js
2. 确保您在GitHub上拥有该仓库的访问权限

## 步骤1：GitHub 仓库设置

首先，让我们在GitHub上进行必要的设置，确保仓库可以正常部署GitHub Pages：

### 1.1 访问仓库设置

1. 打开浏览器，登录GitHub账号
2. 进入 `Anystat_doc_web.github.io` 仓库页面
3. 点击右上角的 `Settings` 选项卡

### 1.2 配置分支

1. 在左侧导航栏中点击 `Branches`
2. 确保 `Default branch` 设置为 `main`（这与GitHub Actions工作流中配置的触发分支一致）

### 1.3 配置Pages

1. 在左侧导航栏中点击 `Pages`
2. 在 `Build and deployment` 部分，确保以下设置：
   - `Source`: 选择 `GitHub Actions`（这表示使用GitHub Actions进行构建和部署）
   - 如果之前设置了其他Source，请更改为`GitHub Actions`

### 1.4 配置Actions权限

1. 在左侧导航栏中点击 `Actions` -> `General`
2. 向下滚动到 `Workflow permissions` 部分
3. 确保选择 `Read and write permissions`（这允许GitHub Actions具有足够的权限来部署Pages）
4. 勾选 `Allow GitHub Actions to create and approve pull requests` 选项
5. 点击 `Save` 按钮保存设置

## 步骤2：项目配置检查

现在，让我们确认项目本地配置是否正确：

1. 项目的VitePress配置文件中的`base`路径已经正确设置为`/Anystat_doc_web.github.io/`，这与仓库名称匹配
2. GitHub Actions工作流文件已经配置好，会自动处理构建和部署

## 步骤2：确保本地代码是最新的

打开终端，进入项目目录，运行以下命令：

```bash
# 拉取最新代码
git pull origin main

# 安装依赖
npm install
```

## 步骤3：测试本地构建

在部署之前，让我们确保本地构建是成功的：

```bash
# 构建文档网站
npm run docs:build

# 预览构建结果
npm run docs:preview
```

如果预览正常（如之前所见），您可以按`Ctrl+C`停止预览服务器。

## 步骤4：提交更改

如果您对文档进行了任何修改，请提交这些更改：

```bash
# 添加所有更改的文件
git add .

# 提交更改
git commit -m "更新文档内容"
```

## 步骤5：部署到GitHub

将代码推送到GitHub的main分支，这将触发GitHub Actions自动部署：

```bash
# 推送到main分支
git push origin main
```

## 步骤6：查看部署进度

1. 打开浏览器，访问您的GitHub仓库页面
2. 点击上方导航栏中的"Actions"选项卡
3. 您应该能看到一个正在运行的工作流，名称类似于"deploy.yml"
4. 点击该工作流，查看构建和部署的实时进度

## 步骤7：访问部署后的网站

部署完成后，您可以通过以下方式访问网站：

1. 在GitHub仓库页面，点击"Settings"选项卡
2. 在左侧导航中选择"Pages"
3. 您将看到网站的URL，格式为：`https://[用户名].github.io/Anystat_doc_web.github.io/`

> 注意：首次部署可能需要等待几分钟时间，GitHub需要处理和发布您的网站

## 步骤8：验证部署结果

部署成功后，打开浏览器访问您的GitHub Pages网站，检查以下内容：

1. 网站是否正常加载，没有404错误
2. 导航栏和侧边栏是否正常工作
3. 图片和链接是否正确显示
4. 页面排版和样式是否与本地预览一致

## 步骤9：GitHub Actions工作流详解

项目中的GitHub Actions工作流(`.github/workflows/deploy.yml`)会自动处理构建和部署过程：

### 工作流触发条件

```yaml
on:
  # 当推送到main分支时触发构建
  push:
    branches: [ main ]
  # 允许手动触发工作流
  workflow_dispatch:
```

这意味着：
1. 每当代码推送到`main`分支时，工作流会自动触发
2. 您也可以在GitHub网页上手动触发工作流

### 环境变量

```yaml
env:
  VITEPRESS_BASE_URL: /Anystat_doc_web.github.io/
```

这个环境变量确保VitePress在构建时使用正确的基础路径。

### 工作流包含两个主要任务

1. **build**：负责构建文档网站
2. **deploy**：负责将构建结果部署到GitHub Pages

## 常见问题与解决方案

### 1. 部署失败

如果GitHub Actions工作流执行失败：

1. 点击Actions选项卡，查看具体的错误日志
2. 常见错误及解决方法：
   - **依赖安装失败**：可能是Node.js版本不匹配，尝试更新`.github/workflows/deploy.yml`中的Node.js版本
   - **构建错误**：检查VitePress配置是否正确，特别是`base`路径
   - **权限不足**：确保已按照步骤1.4设置正确的Actions权限

### 2. 网站可以访问但样式错乱

这通常是`base`路径配置错误导致的：

1. 检查`docs/.vitepress/config.js`中的`base`配置是否正确
2. 确保它与仓库名称完全匹配：`/Anystat_doc_web.github.io/`
3. 修改后重新提交代码并触发部署

### 3. 图片或链接无法访问

确保您在文档中使用的是相对路径：

- 正确：`![图片](/images/example.png)`
- 错误：`![图片](https://绝对路径)`

## 高级设置：自定义域名

如果您想使用自定义域名访问文档网站，请按照以下步骤操作：

1. 在DNS提供商处配置CNAME记录，指向`[用户名].github.io`
2. 在GitHub仓库的Settings > Pages中，在"Custom domain"输入框中输入您的自定义域名
3. 点击"Save"按钮
4. GitHub会自动验证域名配置并生成HTTPS证书

## 自动化部署提示

1. **定期更新依赖**：定期运行`npm update`命令以保持依赖包更新
2. **使用Git分支策略**：建议使用`dev`分支进行开发，完成后合并到`main`分支触发部署
3. **添加部署状态徽章**：在README.md中添加GitHub Actions状态徽章，显示部署状态

```markdown
[![GitHub Pages](https://github.com/[用户名]/Anystat_doc_web.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/[用户名]/Anystat_doc_web.github.io/actions/workflows/deploy.yml)
```

## 注意事项

1. 部署可能需要几分钟时间完成，请耐心等待
2. 如果部署失败，可以在GitHub Actions日志中查看详细错误信息
3. 文档内容的任何更新，只需推送到main分支，GitHub Actions会自动重新部署

## 自定义域名（可选）

如果您想使用自定义域名访问文档网站：

1. 在仓库的Settings > Pages中设置自定义域名
2. 确保您的DNS提供商配置了正确的CNAME记录

## 部署问题排查

如果部署后网站无法正常访问，请检查：

1. VitePress配置中的`base`路径是否与仓库名称一致
2. GitHub Pages设置中的源分支是否为main
3. GitHub Actions工作流是否有错误日志

如需进一步帮助，请查看GitHub Pages和VitePress的官方文档。