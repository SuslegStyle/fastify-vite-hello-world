<template>
  <h1>{{props.testProperty}}</h1>
  <p>{{homepageData}}</p>
</template>

<script setup>
import {useHydration} from 'fastify-vite-vue/client.mjs';

const props = defineProps({
  testProperty: {
    type: String,
    required: true
  }
});

const ctx = useHydration();
const homepageData = await ctx.$api.homepage();

</script>

<style scoped>

</style>
