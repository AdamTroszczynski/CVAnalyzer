<template>
  <PageHeader />
  <NavBar />
  <main class="min-h-[calc(100%-96px)] flex flex-col justify-between md:min-h-[calc(100%-119px)]">
    <RouterView />
    <MainFooter />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/common/PageHeader.vue'
import NavBar from '@/components/common/NavBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
</script>
