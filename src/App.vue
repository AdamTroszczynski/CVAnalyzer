<template>
  <PageHeader />
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/common/PageHeader.vue'
import NavBar from '@/components/common/NavBar.vue';
</script>
