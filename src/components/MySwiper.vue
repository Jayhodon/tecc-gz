<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-19 15:15:39
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-07 02:45:15
 * @FilePath: /tecc-gz/src/components/MySwiper.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <swiper
    class="swiper-container"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true }"
    :autoplay="{ autoplay: true }"
    loop
  >
    <swiper-slide class="swiper-slide" v-for="(item, i) in imgs" :key="i">
      <a :href="item.url">
        <img :src="item.imgUrl" alt="" />
        <div class="swiper-slide-context">
          <span>{{ item.title }}</span>
        </div>
      </a>
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { reactive, toRefs } from "vue";
// Import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// import { getSwiperList } from "../api/httpRequest";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  name: "swiperCom",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = reactive({
      imgs: [
        {
          imgUrl: require("../assets/Top_Banner_1.jpeg"),
          title: "「酒行业品牌维权及商标保护线上研讨会」成功举办",
          url: "https://mp.weixin.qq.com/s/wXGxpNCfGBm8up5LJCvVng",
        },
        {
          imgUrl: require("../assets/Top_Banner_2.jpeg"),
          title:
            "“恶意注册与储备性、防御性商标的冲突”主题培训会——“广东省商标品牌指导示范站”系列活动第一讲",
          url: "https://mp.weixin.qq.com/s/31vfLUvAVn421FRrH7oJ7w",
        },
        {
          imgUrl: require("../assets/Top_Banner_3.jpeg"),
          title:
            "品牌保护之用商标理清品牌边界——广东省商标品牌指导示范站服务系列活动第二讲",
          url: "https://mp.weixin.qq.com/s/31vfLUvAVn421FRrH7oJ7w",
        },
      ],
    });

    // 初始化轮播图对象
    const handleSwiperList = () => {
      // getSwiperList(1, 10)
      //   .then((res) => {
      //     console.log(res);
      //     res.rows.forEach((item) => {
      //       state.imgs.push({
      //         imgUrl: item.imgUrl,
      //         detail: item.title,
      //         url: "https://mp.weixin.qq.com/s/31vfLUvAVn421FRrH7oJ7w",
      //       });
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };
    const init = () => {
      handleSwiperList();
    };
    init();
    return {
      ...toRefs(state),
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
  background-color: #f2f4f7;
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #248cc0;
  --swiper-navigation-color: #248cc0;
  --swiper-navigation-size: 20px;
}
.swiper-slide-context {
  height: 36px;
  padding-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #787878;
  span {
    width: 100%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.swiper-slide img {
  width: 100%;
}
</style>