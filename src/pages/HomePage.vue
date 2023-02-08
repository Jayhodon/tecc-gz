<!--
 * @Description: 网站首页 router
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-07 02:45:50
 * @FilePath: /tecc-gz/src/pages/HomePage.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <!-- header banner -->
  <div class="layout">
    <!-- video -->
    <div class="marB30 clearfix">
      <!-- 轮播图组件 -->
      <div class="w700 fl">
        <Swiper :slideList="list"></Swiper>
      </div>
      <!-- 培训视频插入 -->
      <div class="w470 fr">
        <div class="index_box1">
          <div class="common_hd">
            <ul class="tit clearfix">
              <li class="on">
                <a target="_parent">商标知识视频</a>
              </li>
            </ul>
          </div>
          <div class="video">
            <div class="video-title">
              <span>一条小视频教会你</span>
            </div>
            <div class="video-view clearfix">
              <video class="video-item" :src="videoUrl" controls />
            </div>
            <div class="video-context">
              <span>注册商标网上申请,如何申请账户?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 最新动态列表 -->
  <div class="layout">
    <List listType="all" title="最新动态列表"></List>
  </div>

  <!-- 合作单位 -->
  <div v-if="partnerList.length > 0" class="partner-layout layout">
    <div class="index_box1">
      <div class="common_hd">
        <ul class="tit clearfix">
          <li class="on">
            <span>合作单位</span>
          </li>
        </ul>
      </div>
      <div class="partner">
        <div
          class="partner-item"
          v-for="(item, index) in partnerList"
          :key="index"
        >
          <img
            :src="item.url"
            style="display: block; width: 100%; height: 100%"
          />
          <div class="partner-title">
            <span>{{ item.detail }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Swiper from "../components/MySwiper.vue";
import List from "../components/MyList.vue";
// import { getIndexUrlList } from "../api/httpRequest";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    List,
  },
  setup() {
    const state = reactive({
      partnerList: [
        {
          url: require("../assets/FST_ACT.png"),
          detail: "佛山市顺德区商标协会",
        },
        {
          url: require("../assets/FST_ACT.png"),
          detail: "佛山市顺德区商标协会",
        },
        {
          url: require("../assets/FST_ACT.png"),
          detail: "佛山市顺德区商标协会",
        },
        {
          url: require("../assets/FST_ACT.png"),
          detail: "佛山市顺德区商标协会",
        },
      ],
      videoUrl: require("../../../video.mp4"),
    });

    // 初始化视频链接
    const handleIndexUrlList = () => {
      // getIndexUrlList(1, 10)
      //   .then((res) => {
      //     console.log(res);
      //     state.videoUrl = res.rows[0].videoUrl;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };

    const init = () => {
      handleIndexUrlList();
    };
    init();

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped lang="scss">
.headline-banner {
  display: flex;
  justify-content: center;
  img {
    border-radius: 10px;
  }
}

.banner {
  position: relative;
  height: 356px;
  background: no-repeat center top;

  img {
    width: 100%;
    height: 100%;
  }
}

.video {
  background-color: #f1f4f7;
  .video-title {
    font-size: 24px;
    display: flex;
    padding-top: 5px;
    color: #6f6f6f;
    justify-content: center;
    font-weight: bold;
  }
  .video-context {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #868686;
  }
  .video-view {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 20px;
    .video-item {
      width: 100%;
    }
  }
}

.layout {
  width: 85vw;
}

.w700 {
  width: 60%;
}

.w470 {
  width: 38%;
}

.layout-view {
  margin-bottom: 30px;
  .layout-view-left {
    width: 700px;
    float: left;
  }
  .layout-view-right {
    width: 700px;
    float: right;
  }
}

.partner-layout {
  padding: 30px 0;
  .partner {
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
    .partner-item {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .partner-title {
        margin-top: 5px;
      }
    }
  }
  span {
    font-size: 1.25rem;
  }
}
</style>