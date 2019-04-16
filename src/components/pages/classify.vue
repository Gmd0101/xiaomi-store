<template>
  <div>
    <van-nav-bar
      title="分类"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "Classify",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>

<style scoped>
</style>