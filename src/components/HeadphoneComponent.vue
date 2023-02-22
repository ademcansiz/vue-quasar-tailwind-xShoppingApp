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

  <div class="flex justify-start  items-center gap-x-6 gap-y-6 w-full flex-wrap  mb-60">
    <div class="bg-slate-200 box-border rounded-md p-6 w-60" v-for="headphone in store.headphones" :key="headphone.id">
      <img class="w-60 h-52 bg-cover" :src='headphone.img'>
      <div class="flex mt-5">
        <p class="flex flex-col font-bold">{{headphone.title}}
          <span class="font-normal text-xs">{{headphone.description}}</span>
        </p>
        <div class="flex items-center gap-x-10">
          <button class="p-2 bg-amber-600 rounded-xl text-white" @click="addClick(headphone.title)">Add To Card</button>
          <span class="text-xl text-red-700 font-bold">{{ headphone.price }}</span>
        </div>
      </div>
    </div>
  </div>

</section>
</template>
<script>
import { defineComponent ,createApp} from 'vue'
import {useAddToCard} from '../store/AddToCard';
import App from 'src/App.vue'
import {createPinia} from 'pinia'
import axios from 'axios';


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)


export default defineComponent({
  setup() {
    const store = useAddToCard();
    return{
      // headphones: [{
      //     id:1,
      //     img:'assets/marshall.jpg',
      //     title:"Marshall Headphone",
      //     description:"Organic Cotton, Fairtrade Certifited",
      //     price:"250 $",
      //   },{
      //       id:2,
      //     img:'assets/jbl.jpg',
      //     title:"JBL Tune 500Bt Headphone",
      //     description:"Organic Cotton, Fairtrade Certifited",
      //     price:"200 $",
      //   },{
      //       id:3,
      //     img:'assets/philips.jpg',
      //     title:"Philips Headphone",
      //     description:"Organic Cotton, Fairtrade Certifited",
      //     price:"150 $",
      //   },{
      //       id:4,
      //     img:'assets/airpods.jpg',
      //     title:"Airpods Headphone",
      //     description:"Organic Cotton, Fairtrade Certifited",
      //     price:"350 $",
      //   },{
      //       id:5,
      //     img:'assets/sennheiser.jpg',
      //     title:"Sennheiser Headphone",
      //     description:"Organic Cotton, Fairtrade Certifited",
      //     price:"450 $",
      //   }]
        store,
    }
  },
  methods:{
    addClick(props){
      axios
        .post(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json",
           { todo: props }
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
