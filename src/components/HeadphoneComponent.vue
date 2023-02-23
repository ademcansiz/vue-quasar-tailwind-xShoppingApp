<template>
<section class="mx-[7%]">
  <div class="flex gap-x-4">
    <button class="bg-slate-300 px-4 py-1  rounded-lg">
    Headphone Type
    <i class="fa-solid fa-chevron-down pl-1"></i>
  </button>
  <button class="bg-slate-300 px-4 py-1  rounded-lg">
   Price
    <i class="fa-solid fa-chevron-down pl-1"></i>
  </button>
  <button class="bg-slate-300 px-4 py-1  rounded-lg">
    Material
    <i class="fa-solid fa-chevron-down pl-1"></i>
  </button>
  <button class="bg-slate-300 px-4 py-1  rounded-lg">
    Color
    <i class="fa-solid fa-chevron-down pl-1"></i>
  </button>
  <button class="bg-slate-300 px-4 py-1  rounded-lg">
    Other
    <i class="fa-solid fa-chevron-down pl-1"></i>
  </button>
  </div>

  <div class="mt-16 mb-4">
    <h4 class="font-bold text-amber-600">Headphones For You!</h4>
  </div>

      <div class="flex justify-start  items-center gap-x-6 gap-y-6 mt-8 w-full flex-wrap  mb-60">
        <div class="bg-slate-200 box-border rounded-md p-6 w-60 h-96" v-for="headphone in store.headphones" :key="headphone.id">
            <router-link  :to="{ path: `/${headphone.id}`}">
              <img class="w-60 h-52 bg-cover" :src='headphone.img'>
            </router-link>
          <div class="flex mt-5">
            <p class="flex flex-col font-bold">{{headphone.title}}
              <span class="font-normal text-xs">{{headphone.description}}</span>
            </p>
            <div class="flex items-center gap-x-10">
              <button class="p-2 bg-amber-600 rounded-xl text-white" @click="addClick(headphone)">Add To Card</button>
              <span class="text-xl text-red-700 font-bold">{{ headphone.price }} $</span>
            </div>
          </div>
        </div>
      </div>

</section>
</template>
<script>
import { defineComponent} from 'vue'
import {useAddToCard} from '../store/AddToCard';
import axios from 'axios';

export default defineComponent({
  setup() {
    const store = useAddToCard();
    return{
        store,
    }
  },
  methods:{
    addClick(props){
      this.store.addHeadphone(props)
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
})
</script>
