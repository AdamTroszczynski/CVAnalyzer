<template>
  <section v-if="checkValidQuery">Tak</section>
  <section v-else>Nie</section>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const checkValidQuery = computed<boolean>(() => {
  return route.query.hasOwnProperty('id')
})
</script>
