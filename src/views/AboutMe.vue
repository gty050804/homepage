<script setup>
const aboutCards = [
  {
    id: 'profile-1',
    title: 'I(N/S?)FP',
    description: 'MBTI大师，但分不清自己的MBTI。。。',
    image: new URL('../assets/main/infp.jpg', import.meta.url).href,
    progress: 75
  },
  {
    id: 'profile-2',
    title: '乐队er（keyboard operator）',
    description: '你愿意和我组一辈子乐队吗？',
    image: new URL('../assets/main/band.jpg', import.meta.url).href,
    progress: 50
  },
  {
    id: 'profile-3',
    title: 'Phigros',
    description: 'rks 16.28 小萌新',
    image: new URL('../assets/main/phi.jpg', import.meta.url).href,
    progress: 100
  },
  {
    id: 'profile-4',
    title: 'Unreal引擎',
    description: '《不如原神》弗如远甚！',
    image: new URL('../assets/main/unreal.png', import.meta.url).href,
    progress: 10
  },
  {
    id: 'profile-5',
    title: '具身智能',
    description: '模仿学习？扩散模型？抱歉，学不懂',
    image: new URL('../assets/main/ai.jpg', import.meta.url).href,
    progress: 1
  },
  {
    id: 'profile-6',
    title: '脑机接口',
    description: '时频分析？置换检验？抱歉，学不懂',
    image: new URL('../assets/main/bci.png', import.meta.url).href,
    progress: 1
  },
  {
    id: 'profile-7',
    title: '二游',
    description: '把阿列夫一肘飞！',
    image: new URL('../assets/main/mc.jpg', import.meta.url).href,
    progress: 60
  },
  {
    id: 'profile-8',
    title: '日本語',
    description: 'は菜菜です。',
    image: new URL('../assets/main/jap.jpg', import.meta.url).href,
    progress: 10
  }
]
</script>

<template>
  <div class="about-content-area">
    <header class="header-section">
      <h1 class="name">Hallo，我是Phier！</h1>
    </header>
    <article class="article-body">
      <p>我是2023级SJTU 机械钱班 plus 计算机minor plus AI+Robotics微minor 的这样的一名学生！</p>
      <h2 class="section-title">关于“Phier”</h2>
      
      <p>
        Phier昵称赏析：
      </p>

      
      <ul class="simple-list">
        <li><strong>Phi  </strong>：重度Phigros玩家（又菜又爱玩型）；</li>
        <li><strong><span> er  </span> </strong>：  ......的人；</li>
        <li><strong>ˈfaɪə</strong>：笨人火象星座，Phier和Fire谐音，令人忍俊不禁；</li>
        <li><strong> φ </strong>：每一个Phigros玩家的毕生追求</li>
      </ul>

      
    </article>

    <header class="section">
      <h1 class="section-title">关于我</h1>
    </header>

    <article class="article-body">
      <p>
        中度偏重度社恐，I(N/S？)FP，<s>面向ai编程的屑 </s>，<s>喜欢</s>具身智能，乐队er，钢琴小白，UNREAL引擎, 日本語を勉強しています
      </p>
      <p>
        厨：绿苹果厨，鸣潮厨，崩铁厨，库洛厨，mhy厨，音游厨，rks16.28厨，.etc厨 (待完善，此处省略33550336字)
      </p>
      <p>终身学习，但佛系学习(`・ω・´)</p>
    </article>

    <!-- 关于我：圆角矩形卡片区域 -->
    <section class="about-cards">
      <div
        v-for="card in aboutCards"
        :key="card.id"
        class="about-card"
      >
        <div class="card-image-wrapper">
          <img class="card-image" :src="card.image" :alt="card.title" />
        </div>

        <div class="card-text">
          <div class="card-title">{{ card.title }}</div>
          <div class="card-description">{{ card.description }}</div>
        </div>

        <div class="card-progress">
          <div class="card-progress-bar">
            <div
              class="card-progress-inner"
              :style="{ width: card.progress + '%' }"
            ></div>
          </div>
          <span class="card-progress-label">{{ card.progress }}%</span>
        </div>
      </div>
    </section>

    <header class="section">
      <h1 class="section-title">Site</h1>
    </header>

    <article class="article-body">
      <p>GitHub:</p>
      <a href="https://github.com/gty050804" target="_blank">https://github.com/gty050804</a>
      <p>B站主页:</p>
      <a href="https://space.bilibili.com/3537120266291299" target="_blank">https://space.bilibili.com/3537120266291299</a>
      <p>邮箱:</p>
      <a >gty050804@sjtu.edu.cn</a>
      <p>By the way:</p>
      <p>鸣潮特征码：105460858  </p>
      <p>崩铁uid：137727925 </p>
    </article>
  </div>
</template>

<style scoped>
/* 核心控制区 
   限制内容的最大宽度，防止在大屏上文字拉得太长导致阅读困难。
   margin: 0 auto 实现水平居中。
*/
.about-content-area {
  max-width: 1000px;
  margin: 0 auto;
  /* 不需要任何背景色和阴影了，直接透出底层的毛玻璃 */
}

/* --- 头部样式 --- */
.header-section {
  text-align: center;
  margin-bottom: 50px;
  /* 底部加一条非常淡的分割线，增加仪式感 */
  border-bottom: 1px solid var(--glass-border); 
  padding-bottom: 30px;
}

.name {
  font-size: 2.5rem; /* 字体稍微加大一点 */
  color: var(--text--primary);
  margin: 0 0 15px 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.university {
  font-size: 1.1rem;
  color: var(--text--secondary); /* 稍微深一点的灰色，增加质感 */
  font-weight: 400;
  margin: 0;
}

/* --- 正文样式 --- */
.article-body {
  color: var(--text--primary);
}

.section-title {
  font-size: 1.5rem;
  color: var(--text--primary);
  margin-bottom: 25px;
  font-weight: 600;
}

p {
  line-height: 1.8; /* 保持舒适的行高 */
  margin-bottom: 22px;
  font-size: 1.05rem;
  /* 两端对齐，让文字块在视觉上更整齐、学院派 */
  text-align: justify; 
  color: var(--text--primary);
}

/* 加粗文字样式：仅加粗，无背景色 */
strong {
  font-weight: 700;
  color: var(--text--primary);
}

/* 列表样式：极简引用风格 */
.simple-list {
  padding-left: 0;
  margin: 25px 0 35px 0;
  /* 左侧一条细线，不喧宾夺主 */
  border-left: 3px solid var(--glass-border); 
  margin-left: 5px;
}

.simple-list li {
  margin-bottom: 12px;
  line-height: 1.7;
  list-style-type: none;
  padding-left: 20px; /* 文字离左边的线稍微远一点 */
  color: var(--text--primary);
}

/* 关于我：卡片区域 */
.about-cards {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.about-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-card:hover {
  transform: scale(1.04);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-text {
  margin-bottom: 12px;
  flex: 1;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text--primary);
  margin-bottom: 4px;
}

.card-description {
  font-size: 0.9rem;
  color: var(--text--secondary);
  line-height: 1.5;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-progress-bar {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}

.card-progress-inner {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
}

.card-progress-label {
  font-size: 0.85rem;
  color: var(--text--primary);
}

@media (max-width: 1024px) {
  .about-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .about-cards {
    grid-template-columns: 1fr;
  }
}
</style>