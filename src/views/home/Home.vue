<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeSwiper} from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data(){
    return {
      homeSwiper:[]
    }
  },
  created(){
    getHomeSwiper().then(res=>{
      console.log(res);
    })
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
}
</style>
