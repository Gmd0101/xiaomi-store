<template>
  <div class="Index">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "./tabbar/tabbar.vue";
export default {
  components: {
    TabBar
  },
  name: "Index",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
