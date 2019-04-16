<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="search-box">
      <van-search background="#ff6801" placeholder="请输入搜索关键词" v-model="searchValue"/>
    </div>
    <!-- 图片轮播 -->
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
        <!-- <img v-lazy="image"> -->
        <img :src="image">
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <div class="nav">
      <router-link v-for="(nav,index) in navbar" :key="index" :to="nav.linkroute" class="navbar">
        <i class="icon iconfont" :class="nav.icon"></i>
        <span>{{nav.title}}</span>
      </router-link>
    </div>
    <div>
      
    </div>
    <!-- <img src="../../assets/images/1.jpg" alt=""> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      swipeImages: [
        "../../static/images/1.jpg",
        "../../static/images/2.jpg",
        "../../static/images/3.jpg"
      ],
      navbar: [
        { icon: "icon-shouji", title: "手机", linkroute: "home" },
        {
          icon: "icon-dianshiguiyiguixieguianzhuang",
          title: "电视",
          linkroute: "home"
        },
        { icon: "icon-diannao", title: "电脑", linkroute: "home" },
        { icon: "icon-tianchongxing-", title: "智能", linkroute: "home" },
        { icon: "icon-icon-test", title: "生态链", linkroute: "home" },
        { icon: "icon-xinpin", title: "新品", linkroute: "home" },
        {
          icon: "icon-ico_home_committed",
          title: "小米众筹",
          linkroute: "home"
        },
        { icon: "icon-tianchongxing-1", title: "以旧换新", linkroute: "home" },
        { icon: "icon-gouwu", title: "1分拼团", linkroute: "home" },
        { icon: "icon-zuanshi", title: "每日甄选", linkroute: "home" }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  /* height:  */
}
.search-box {
  width: 100%;
}
.swipe {
  width: 100%;
  height: 150px;
}
img {
  width: 100%;
  height: 100%;
  /* height: 150px; */
}
.nav {
  width: 100%;
  height: 120px;
  padding: 5px 0;
  /* border: 1px solid red; */
  display: flex;
  flex-flow: row wrap;
}
.navbar {
  width: 20%;
  height: 50%;
  /* border: 1px solid green; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* align-content: space-between; */
  text-align: center;
}
.navbar i {
  /* border: 1px solid red; */
  font-size: 30px;
  /* color: skyblue; */
  /* padding: 0; */
}
.navbar:nth-of-type(1) i,
.navbar:nth-of-type(6) i {
  color: #fca45c;
}
.navbar:nth-of-type(2) i,
.navbar:nth-of-type(7) i {
  color: #f7c264;
}
.navbar:nth-of-type(3) i,
.navbar:nth-of-type(8) i {
  color: #82bcfc;
}
.navbar:nth-of-type(4) i,
.navbar:nth-of-type(9) i {
  color: #60d8b5;
}
.navbar:nth-of-type(5) i,
.navbar:nth-of-type(10) i {
  color: #aca1ff;
}

.navbar span {
  font-size: 12px;
  color: #aaa;
  /* border: 1px solid #000; */
}
</style>
