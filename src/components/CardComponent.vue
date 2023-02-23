<template>
  <HeaderComponent></HeaderComponent>
<div class="border mx-[7%] mt-10">
  <div class="bg-red-600 mx-[7%] " v-for="card in cardElements" :key="card.id">
    <img :src="card.img" alt="">
    <h1 class="text-xl">{{ card.todo }}</h1>
    <p>{{ card.price }}</p>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';

export default defineComponent({
  components: {
    HeaderComponent,
  },
  data() {
    return {
      cardElements: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json");
        for (let key in response.data) {
          let todo = {
            id: key,
            todo: response.data[key].todo,
            price: response.data[key].price,
            description: response.data[key].description
          };
          this.cardElements.push(todo)
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
