<template>
  <div class="works__container">
    <MagicCard
      class="works__item"
      v-for="(item, index) in data"
      :key="index"
      @click="() => jumpLink(item.link)"
    >
      <h4>{{ item.title }}</h4>
      <p>{{ item.desc }}</p>
    </MagicCard>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    title: '📕我的知识库',
    desc: '持续学习，不断记录',
    link: 'https://garden.rgbyove.top/'
  },
  {
    title: '❤️生活日记',
    desc: "保持一颗热爱生活的心",
    link: '#'
  },
  {
    title: '🎨 vuepress',
    desc: '本站点由vuepress-theme-reco驱动',
    link: 'https://vuepress-theme-reco.recoluan.com'
  },
  
]

const jumpLink = (link?: string) => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<style scoped>
@import '@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css';

.works__container {
  @apply grid grid-cols-1 gap-4 max-w-screen-lg mx-auto my-16 px-6;
  @apply md:grid-cols-3;
  .works__item {
    @apply py-4 px-6 cursor-pointer;
    h4 {
      @apply mt-0 mb-0 pt-0;
    }
    p {
      @apply my-4 text-lighter;
    }
  }
}
</style>
