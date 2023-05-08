<template>
    <section class="tool-card">
        <a class="title" :href="link" target="_blank">
            <span class="text">{{title}}</span>
        </a>
        <p class="desc">
            {{desc}}
        </p>
    </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  link?: string
  desc?: string
}>()
</script>

<style scoped>
.tool-card {
    @apply px-4 pt-4 pb-3 mb-2.5 min-h-full rounded-md;
    @apply border-indigo-500 border-solid border-2 hover:shadow-lg;
    transition: all .5s;
    .text {
        font-weight: 650;
    }
    .desc {
        @apply mt-2.5 text-sm text-slate-500;
        margin-bottom: 0;
    }
}
</style>