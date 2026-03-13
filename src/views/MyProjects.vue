<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import MarkdownIt from 'markdown-it'
import fm from 'front-matter' 

// 1. 初始化 Markdown 解析器
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

// 2. 自动读取 .md 文件 (使用 front-matter)
const mdFiles = import.meta.glob('../projects/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
})

const allProjects = ref([])

for (const path in mdFiles) {
  try {
    const rawContent = mdFiles[path]
    // 解析 Front-matter
    const { attributes, body } = fm(rawContent)
    
    allProjects.value.push({
      ...attributes, // 包含 id, title, image, tags 等
      renderedHtml: md.render(body) // 渲染正文
    })
  } catch (e) {
    console.error(`解析文件 ${path} 出错:`, e)
  }
}

// 排序：ID 大的在前面
allProjects.value.sort((a, b) => (b.id || 0) - (a.id || 0))

// --- 交互逻辑 ---
const selectedProject = ref(null)

function openProject(project) {
  selectedProject.value = project
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <div class="projects-container">
    <div class="empty-tip">
      项目展示区域暂时空白。
    </div>
  </div>
</template>

<style scoped>
/* =========================================
   1. 基础布局
   ========================================= */
.projects-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 30px;
  padding-bottom: 40px;
}

.empty-tip {
  /* 颜色换成变量，自动适配 */
  color: var(--text-secondary);
  text-align: center;
  grid-column: 1 / -1;
  padding-top: 50px;
}

/* =========================================
   2. 详情页样式
   ========================================= */
.project-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
}

.detail-nav {
  margin-bottom: 20px;
}

.back-btn {
  background: transparent;
  /* 边框颜色换成变量 */
  border: 1px solid var(--glass-border);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  /* 文字颜色换成变量 */
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s;
}

.back-btn:hover {
  background: var(--text-highlight);
  border-color: var(--text-highlight);
  color: #fff;
}

/* ⭐ 核心：详情页玻璃卡片 */
.detail-content {
  /* 背景色换成变量 (白天白，晚上黑) */
  background: var(--glass-bg);
  /* 加上边框，夜间模式更有质感 */
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--glass-shadow);
  /* 文字颜色换成变量 */
  color: var(--text-primary);
  
  transition: all 0.3s ease;
}

.detail-cover {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px var(--glass-shadow);
}

h1 { 
  margin: 0 0 10px 0; 
  color: var(--text-primary); /* 变量 */
  font-size: 2rem; 
}

.meta-row { 
  display: flex; 
  gap: 20px; 
  align-items: center; 
  margin-bottom: 20px; 
  color: var(--text-secondary); /* 变量 */
}

.tag { 
  /* 使用通用的半透明灰，黑白模式都通用 */
  background: rgba(128, 128, 128, 0.15); 
  padding: 4px 8px; 
  border-radius: 6px; 
  font-size: 0.8rem; 
  color: var(--text-primary); /* 变量 */
}

.divider { 
  border: 0; 
  height: 1px; 
  /* 分割线颜色换成变量 */
  background: var(--glass-border); 
  margin: 30px 0; 
}

/* =========================================
   3. 动画 (保持不变)
   ========================================= */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateX(30px); }
.fade-slide-leave-to { opacity: 0; transform: translateX(-30px); }

/* =========================================
   4. Markdown 正文排版 (全面变量化)
   ========================================= */
:deep(.markdown-body) {
  line-height: 1.8;
  color: var(--text-primary); /* 变量 */
  font-size: 1.05rem;
}

:deep(.markdown-body h2) {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--text-primary); /* 变量 */
  border-bottom: 2px solid var(--glass-border); /* 变量 */
  padding-bottom: 0.3em;
}

:deep(.markdown-body h3) {
  font-size: 1.25rem;
  margin-top: 24px;
  margin-bottom: 12px;
  color: var(--text-highlight); /* 变量 */
  border-left: 4px solid var(--text-highlight);
  padding-left: 10px;
}

:deep(.markdown-body p) {
  margin-bottom: 16px;
  text-align: justify;
}

:deep(.markdown-body img) {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--glass-shadow); /* 变量 */
  display: block;
  margin: 20px auto;
}

:deep(.markdown-body code) {
  /* 代码块背景：黑白模式通用的半透明灰 */
  background-color: rgba(128, 128, 128, 0.15);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: #d63200; /* 代码颜色暂时保留红色，夜间模式也看得清 */
}

/* 适配夜间模式的代码高亮微调 */
:global(html.dark) :deep(.markdown-body code) {
  color: #ff7b72; 
}

:deep(.markdown-body blockquote) {
  margin: 20px 0;
  padding: 10px 20px;
  color: var(--text-secondary); /* 变量 */
  border-left: 0.25em solid var(--glass-border); /* 变量 */
  background-color: var(--sidebar-bg); /* 变量 */
  font-style: italic;
}

/* --- figure 组合样式 --- */
:deep(.markdown-body figure) {
  margin: 30px 0;
  text-align: center;
  display: block;
}

:deep(.markdown-body figure img) {
  max-width: 100%; 
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--glass-shadow); /* 变量 */
  margin-bottom: 10px;
}

:deep(.markdown-body figcaption) {
  font-size: 0.9rem;
  color: var(--text-secondary); /* 变量 */
  font-style: italic;
  line-height: 1.5;
  margin-top: 5px;
}
</style>