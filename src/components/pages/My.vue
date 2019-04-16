<template>
  <div>
    <div>我的</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" @click="news">消息通知</van-button>

    <van-rate v-model="value" icon="like" void-icon="like-o"/>

    <van-search
      label="地址"
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-stepper v-model="stepperValue"/>

    <van-uploader :after-read="onRead">
      <van-icon name="photograph"/>
    </van-uploader>

    <van-swipe-cell :right-width="65" :left-width="65">
      <span slot="left">选择</span>
      <van-cell-group>
        <van-cell title="单元格" value="内容"/>
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
      <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
      <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
    </van-collapse>

    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      value: 0,
      searchValue: "",
      stepperValue: 1,
      activeNames: []
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    onRead(file) {
      console.log(file);
    },
    news() {
      this.$notify({
        message: "通知",
        duration: 1000,
        background: "#1989fa"
      });
    }
  }
};
</script>

<style scoped>
</style>