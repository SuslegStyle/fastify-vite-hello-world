<template>
  <main>
    <router-view v-slot="{ Component }">
      <h1>{{props.testProperty}}</h1>
      <Suspense @resolve="hydrationDone">
        <component :key="route.path" :is="Component" />
      </Suspense>
    </router-view>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import {hydrationDone} from 'fastify-vite-vue/client.mjs';

useHead({
  title: 'Fastify Vite Hello World App',
  meta: [{
    charset: 'utf-8',
  }, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0',
  }]
});

const props = defineProps({
  testProperty: {
    type: String,
    required: true
  }
});

const route = useRoute();
</script>

<style scoped>

</style>
