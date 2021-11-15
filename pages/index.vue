<template>
  <p>{{homepageData}}</p>
</template>

<script setup>
import {useHydration} from 'fastify-vite-vue/client.mjs';

const ctx = useHydration();
const homepageData = await ctx.$api.homepage();

</script>

<style scoped>

</style>
