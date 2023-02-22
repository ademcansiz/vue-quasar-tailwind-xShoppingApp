<template>
<IndexPage></IndexPage>
</template>

<script>
import { defineComponent, ref } from 'vue'
import IndexPage from 'src/pages/IndexPage.vue';


export default defineComponent({
  name: 'MainLayout',

  components: {
    IndexPage
  },

  setup () {

    return {

  }}
})
</script>
