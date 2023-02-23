<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="mx-[7%] mt-10  p-4 flex flex-row gap-8 justify-center items-center">
      <div class=" w-[45%] h-full">
        <img class="rounded-xl bg-cover w-full h-full" :src="item.img">
      </div>
      <div class=" w-[45%] h-full flex flex-col ">
        <h1 class="text-4xl font-bold my-4">{{ item.title }}</h1>
        <p class="">{{ item.descriptionLong }}</p>
        <div>
          <i class="fa-solid fa-star text-amber-600"></i>
          <i class="fa-solid fa-star text-amber-600"></i>
          <i class="fa-solid fa-star text-amber-600"></i>
          <i class="fa-solid fa-star text-amber-600"></i>
          <i class="fa-regular fa-star text-amber-600"></i>
        </div>
        <div class="flex text-2xl font-bold gap-x-4 my-6">
          <p class="line-through">{{ item.price + 150 }}$</p>
          <span>/</span>
          <p>{{ item.price }}$</p>
        </div>
        <div class="flex  py-2 gap-x-4">
          <button class="text-md p-2 bg-amber-600 rounded-2xl px-8 text-white font-bold">Buy Now</button>
          <button @click="addClick(item)" class="text-md p-2 bg-amber-600 rounded-2xl px-8 text-white font-bold">Add to Card</button>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-x-2 py-4">
            <i class="fa-solid fa-truck  text-amber-600 h-full"></i>
            <div class="font-bold h-full  items-center">Free Delivery</div>
          </div>
          <p>enter your postal code for delivery availability</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useAddToCard } from "../store/AddToCard";
import { useRoute } from "vue-router";
import axios from 'axios';


export default defineComponent({
  components: {
    HeaderComponent,
  },
  setup() {
    const cardStore = useAddToCard();
    const item = ref(null);
    const route = useRoute();
    const itemId = parseInt(route.params.id);
    item.value = cardStore.getItemById(itemId);
    return {
      item,
      cardStore
    };
  },
  methods:{
    addClick(props){
      this.cardStore.addHeadphone(props)
      axios
        .post(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json",
           { id: props.id, todo: props.title,  price:props.price , description:props.description }
        )
        .then((response) => {
          alert("Sepete Eklenmiştir...")
        })
        .catch((e) => {
          console.log(e);
        });
    },

  }
});
</script>
