<template>
  <section class="section  bg-slate-100 mx-[7%] m-8">
  <div class="p-10">
    <p class="text-5xl pt-6 px-14  w-[50%] font-bold text-amber-600">Garp Upto 50% Off On </p>
    <span class="text-5xl px-14 pt-6 pb-14 w-[50%] font-bold text-amber-600">Selected Headphone</span>
  </div>
  <button  class="text-lg px-4 py-2 mx-[7%] mb-10 bg-amber-600 text-white rounded-3xl">
    Buy Now
  </button>
</section>

</template>
<script>
import { defineComponent} from 'vue'

export default defineComponent({
setup(){

}
})
</script>
<style>
.section{
  background-image:
    url('../../public/assets/headphone-human.jpg');
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
}
</style>
