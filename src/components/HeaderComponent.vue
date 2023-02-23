<template>
  <header class="flex justify-between items-center  py-4 px-[7%]">
    <router-link  :to="{ path: `/`}">
      <div @click="onClickLogo " class="text-3xl font-bold text-amber-600 flex justify-center items-center gap-x-3">
          <i class="fa-solid fa-bag-shopping"></i>
          X Shopping
        </div>
    </router-link>
      <nav class="text-amber-600">
        <ul class="flex justify-center items-center gap-x-4 text-md">
          <li class="hover:text-amber-900 py-4  rounded-md cursor-pointer">Categories
            <i class="fa-solid fa-chevron-down"></i>
          </li>
          <li class="hover:text-amber-900 py-4  rounded-md cursor-pointer">Deals
            <i class="fa-solid fa-chevron-down"></i>
          </li>
          <li class="hover:text-amber-900 py-4  rounded-md cursor-pointer">What's New
            <i class="fa-solid fa-chevron-down"></i>

          </li>
          <li class="hover:text-amber-900 py-4  rounded-md cursor-pointer">Delivery
            <i class="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
      </nav>

      <div class="rounded-lg bg-slate-100 p-1 relative outline-none">
        <input class="bg-slate-100  pr-16 border-none outline-none" placeholder="Search Product" type="search">
        <i class="fa-solid fa-magnifying-glass absolute left-60 bottom-4  text-base font-bold"></i>
      </div>

      <div class="flex justify-center items-center gap-x-4">
        <div class="flex justify-center items-center gap-x-2 hover:bg-slate-100 text-amber-600 p-2 rounded-lg">
          <i class="px-1 fa-solid fa-user"></i>
          <div class="cursor-pointer">Account</div>
        </div>
        <div @click="cartBtnClick" class="cursor-pointer flex justify-center items-center gap-x-2 hover:bg-slate-100 text-amber-600 p-2 rounded-lg" >
          <i class="px-1 fa-brands fa-shopify"></i>
          <button class=" cursor-pointer ">Cart
            <div v-if="cartBtn" class="absolute right-28 top-16 w-80  bg-slate-100">
          <nav>
            <ul>
              <li v-for="card in cardElements" :key="card.id" class="p-2 border flex justify-between  rounded-md z-10  items-center">
                <div class="w-full h-full  flex justify-between">
                  <div class="">
                    <span class="mr-2 w-[90%] h-full  ">{{card.todo}} </span>
                  <span class="w-[90%] h-full rounded p-1 bg-amber-600 text-white">{{card.price}} $</span>
                  </div>
                <i @click="deleteHeadphone(card.id)" class="fa-solid fa-trash w-[10%] "></i>
                </div>
              </li>
            </ul>
          </nav>
          <div class="flex justify-between p-2 font-bold">
              Total Amount :
              {{ totalPrice }} $
          </div>
          </div>
        </button>
        </div>
      </div>
  </header>
</template>

<script>
import { defineComponent,ref } from 'vue'
import axios from 'axios'
import {useAddToCard} from '../store/AddToCard';


export default defineComponent({

  setup() {
    const AddToCard = useAddToCard();
    return{
      AddToCard,
    }
  },  data(){
    return{
      // todoList: [],
      cardElements:[],
      cartBtn : ref(false)
    }
  },
  methods:{
    cartBtnClick(){
      this.cartBtn = !this.cartBtn
    },
    cartBtnTrue(){
    return  this.cartBtn = true
    }
    ,
    cartBtnFalse(){
    return  this.cartBtn = false
    }
    ,
    getData(){
     this.cardElements.splice(0,this.cardElements.length)
      axios
          .get(
            "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json"
          )
          .then((response) => {
            for (let key in response.data) {
              let todo = {
                id: key,
                todo: response.data[key].todo,
                price : response.data[key].price,
                description : response.data[key].description
              };
              this.cardElements.push(todo)
            }
          });
    },
    deleteHeadphone(props) {
      axios
        .delete(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos/" +
            props +
            ".json"
        )
        .then((response) => {
         alert("Silinmiştir...")
        })
        .catch((e) => {
          console.log(e);
        });
        this.cartBtn =true;
    },
  },
  computed:{
    totalPrice(){
      return (
        this.cardElements.reduce((total,obj)=>obj.price+total,0)
      )
    },
  },
    mounted() {
    this.getData();
    },
  watch:{
    cartBtn(){
      this.getData();
    }
  }
})
</script>

