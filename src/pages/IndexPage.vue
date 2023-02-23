<template>
<HeaderComponent></HeaderComponent>
<BodyComponent></BodyComponent>
<HeadphoneComponent></HeadphoneComponent>
</template>
<script>

import { defineComponent} from 'vue'
import HeaderComponent from 'src/components/HeaderComponent.vue'
import BodyComponent from 'components/BodyComponent.vue'
import HeadphoneComponent from 'components/HeadphoneComponent.vue';


export default defineComponent({
  components:{
    HeaderComponent,
    BodyComponent,
    HeadphoneComponent,
  },

})
</script>

