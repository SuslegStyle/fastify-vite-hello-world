<template>
  <main>
    <router-view v-slot="{ Component }">
      <h1>Examples</h1>
      <Suspense>
        <component :key="route.path" :is="Component" />
      </Suspense>
    </router-view>
  </main>
</template>

<script>
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

export default {
  setup () {
    useHead({
      title: 'Vite App',
      meta: [{
        charset: 'utf-8',
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      }]
    })
    return { route: useRoute() }
  }
}
</script>

<style scoped>

</style>
