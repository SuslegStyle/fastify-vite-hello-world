<template>
  {{ctx}}
</template>

<script>
import {useHydration} from 'fastify-vite-vue/client';

export const path = '/';

export async function getData({req, $api}) {
  return await $api.homepage();
}

export default {
  async setup() {
    const ctx = await useHydration({getData});

    return {ctx};
  }
}
</script>

<style scoped>

</style>
