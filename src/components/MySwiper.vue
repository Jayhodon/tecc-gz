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
      <img :src="item" alt="" />
      <div class="swiper-slide-context">
        <span>{{ item }}</span>
      </div>
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
// Import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  name: "swiperCom",
  data: function () {
    return {
      imgs: [
        require("../assets/Top_Banner.jpeg"),
        require("../assets/Top_Banner.jpeg"),
        require("../assets/Top_Banner.jpeg"),
        require("../assets/Top_Banner.jpeg"),
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style scoped>
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
}
.swiper-slide img {
  width: 100%;
}
</style>