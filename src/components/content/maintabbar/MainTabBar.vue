<template>
  <tar-bar>
    <tab-bar-item path="/home" color="red">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" color="green">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" color="deepPink">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/cart.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/cart_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" color="yellow">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from "components/common/tabbar/TarBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TarBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
