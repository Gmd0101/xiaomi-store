<template>
  <div class="shopping-cart">
    <div>购物车</div>
    <van-goods-action class="goods-action">
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn info="5" icon="cart-o" text="购物车"/>
      <van-goods-action-mini-btn icon="shop-o" text="店铺"/>
      <van-goods-action-big-btn text="加入购物车"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
    <div>123123</div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {};
  }
};
</script>

<style scoped>
.shopping-cart{
  border: 1px solid red;

}
.goods-action{
  bottom: 60px;
}
</style>