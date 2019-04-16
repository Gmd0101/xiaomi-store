<template>
  <div class="tabbar">
    <router-link to="home" class="tab">
      <i class="icon iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="classify" class="tab">
      <i class="icon iconfont icon-fenlei"></i>
      <span>分类</span>
    </router-link>
    <!-- icon-faxian -->
    <router-link to="discover" class="tab">
      <i class="icon iconfont icon-faxian"></i>
      <span>发现</span>
    </router-link>
    <router-link to="shoppingcart" class="tab">
      <i class="icon iconfont icon-gouwuche2"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="my" class="tab">
      <i class="icon iconfont icon-my_icon"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  /* height: 50px; */
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background-color: #fff;
  opacity: 1;
  box-shadow: 0 2px 4px #000;
  padding: 8px 0;
}
.tab {
  height: 100%;
  /* border: 1px solid green; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.tab i {
  font-size: 24px;
}
.tab span {
  font-size: 14px;
  /* color: rgb(190, 184, 184); */
}

/* 激活导航时的样式 */
.router-link-active {
  color: coral;
}
/* .router-link-exact-active {
  color: greenyellow;
} */
</style>