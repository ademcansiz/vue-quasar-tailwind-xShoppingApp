<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp({
  name: 'QuasarApp'
})

app.use(pinia) 
export default defineComponent({
  name: 'App'
})
</script>
