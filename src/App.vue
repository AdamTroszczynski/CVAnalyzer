<template>
  <PageHeader />
  <NavBar />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/common/PageHeader.vue'
import NavBar from '@/components/common/NavBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
</script>
