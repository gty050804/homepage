# ✨ Phier's Personal Homepage | 我的个人玻璃拟态主页

> "Some days you bloom. Some days you grow roots. Both matter."

这是一个基于 **Vue 3 + Vite** 构建的现代化个人主页。项目采用了极具质感的 **Glassmorphism（玻璃拟态）** 设计风格，包含个人介绍、欢迎页与友情链接等模块，项目展示和学习笔记模块目前预留为空白以便后续扩展。

在原作者开源模板的基础上，主页加入了欢迎页视频、全局视频背景、自定义卡片式「关于我」区域等个性化改动。

## 📸 预览 (Preview)

欢迎页使用一段循环播放的视频作为背景，源文件位于：

```text
src/assets/welcomePage.mp4
```

在浏览器中访问部署后的站点即可直接看到动态效果。 

## ✨ 特性 (Features)

* **🎨 极致的玻璃拟态设计**：全站采用磨砂玻璃质感，配合动态背景，视觉效果通透且高级。
* **🌗 丝滑的日夜切换**：内置深色模式（Dark Mode），基于 CSS 变量实现，一键切换黑金/白银风格。
* **🧘‍♂️ 独创“沉浸模式” (Zen Mode)**：点击左下角画框按钮，UI 自动隐去，只留背景与呼吸，供纯粹欣赏与截图。
* **📱 响应式布局**：完美适配桌面端与移动端，侧边栏在手机端自动调整。
* **📝 Markdown 文章渲染**：内置 Markdown 渲染能力，可用于后续扩展「学习笔记」功能。
* **🎬 视频背景支持**：欢迎页与主页支持使用本地 MP4 作为循环播放背景。
* **🚀 自动化部署**：集成了 Shell 脚本，一键打包并发布至 GitHub Pages。

## 🛠 技术栈 (Tech Stack)

* **核心框架**: [Vue 3](https://vuejs.org/) (Composition API + Script Setup)
* **构建工具**: [Vite](https://vitejs.dev/)
* **样式处理**: Native CSS3 (Variables, Flexbox, Grid, Backdrop-filter)
* **部署托管**: GitHub Pages

## 📂 目录结构 (Directory Structure)

```text
homepage-main/
├── public/              # 静态资源 (Vite 不处理，直接复制到根目录)
│   └── images/          # 存放文章图片、头像、背景图
├── src/
│   ├── assets/          # 编译资源 (组件内的图标等)
│   ├── components/      # 通用组件 (ProjectCard, ThemeSwitch, ZenButton 等)
│   ├── views/           # 页面视图 (AboutMe, MyArticles, MyProjects 等)
│   ├── App.vue          # 根组件 (布局入口)
│   └── main.js          # 项目入口
├── deploy.sh            # 自动部署脚本
├── vite.config.js       # Vite 配置 (包含 base 路径设置)
└── README.md            # 项目说明

```

## 🚀 快速开始 (Quick Start)

如果你想在本地运行这个项目：

1. **克隆仓库**
```bash
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名

```


2. **安装依赖**
```bash
npm install

```


3. **启动开发服务器**
```bash
npm run dev

```


打开浏览器访问 `http://localhost:5173` 即可。

## 📦 构建与部署 (Deployment)

本项目配置了自动化脚本，用于发布到 GitHub Pages。

1. **修改配置**
确保 `vite.config.js` 中的 `base` 属性与你的 GitHub 仓库名一致。
2. **一键发布**
在终端（Git Bash）运行：
```bash
sh deploy.sh

```


脚本会自动执行 `npm run build`，并将 `dist` 目录推送到远程的 `gh-pages` 分支。

