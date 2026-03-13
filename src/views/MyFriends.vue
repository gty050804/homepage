<script setup>
import FriendCard from '../components/FriendCard.vue'
import avatar from '../assets/avatar.png'

// 🤝 友情链接：目前只展示自己的个人主页
const friendsList = [
  {
    name: 'Phier 的个人主页',
    avatar,
    intro: '啥也没有 别来',
    link: 'https://github.com/gty050804'
  }
]
</script>

<template>
  <div class="friends-container">
    <header class="page-header">
      <h1>🤝 友情链接</h1>
      <p>一些我想分享的站点。</p>
    </header>

    <hr class="divider" />

    <div class="friends-grid">
      <FriendCard
        v-for="friend in friendsList"
        :key="friend.name"
        :friend="friend"
      />
    </div>
  </div>
</template>

<style scoped>
/* --- 原有样式保持不变 --- */
.friends-container { width: 100%; padding: 20px 0; display: flex; flex-direction: column; }
.page-header { text-align: center; margin-bottom: 30px; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.page-header h1 { font-size: 2.5rem; margin-bottom: 10px; }
.divider { border: 0; height: 1px; background: rgba(255,255,255,0.3); margin-bottom: 40px; }
.friends-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 30px; padding-bottom: 50px; }
</style>