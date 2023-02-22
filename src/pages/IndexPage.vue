<template>
<FooterComponent></FooterComponent>
<SliderComponent></SliderComponent>
<HeadphoneComponent></HeadphoneComponent>
</template>
<script>
import FooterComponent from 'src/components/FooterComponent.vue'
import SliderComponent from 'src/components/SliderComponent.vue'
import HeadphoneComponent from 'src/components/HeadphoneComponent.vue'
import { defineComponent,ref } from 'vue'
export default defineComponent({
  components:{
    FooterComponent,
    SliderComponent,
    HeadphoneComponent,
  },

})
</script>

