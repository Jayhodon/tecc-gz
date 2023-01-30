<!--
 * @Description: 网站首页 router
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-29 17:00:01
 * @FilePath: /tecc-gz/src/pages/HomePage.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <!-- header banner -->
  <div class="layout">
    <!-- swiper -->
    <div
      class="headline marB30"
      wzades="展示头条"
      aria-label="您已进入头条视窗区"
      altdes="视窗区"
    >
      <div class="headline-banner">
        <!-- 征集：栏目 -->
        <a href="#"><img src="../assets/banner.jpeg" /></a>
      </div>
    </div>
    <!-- video -->
    <div class="marB30 clearfix">
      <div class="w700 fl">
        <Swiper :slideList="list"></Swiper>
      </div>
      <div class="w470 fr">
        <div class="index_box1">
          <div class="common_hd">
            <ul class="tit clearfix">
              <li class="on">
                <a
                  href="https://www.gippc.com.cn/ippc/tzgg/common_list.shtml"
                  target="_parent"
                  >商标知识视频</a
                >
              </li>
            </ul>
          </div>
          <div class="video">
            <div class="video-title">
              <span>一条小视频教会你</span>
            </div>
            <div class="video-view clearfix">
              <video class="video-item" src="../../../video.mp4" controls />
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
    <List :list="newList"></List>
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
          <img src="../assets/GTR_ACT.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Swiper from "../components/MySwiper.vue";
import List from "../components/MyList.vue";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    List
  },
  setup() {
    const state = reactive({
      partnerList: [
        {
          url: "../assets/GTR_ACT.png",
        },
        {
          url: "../assets/GTR_ACT.png",
        },
        {
          url: "../assets/GTR_ACT.png",
        },
        {
          url: "../assets/GTR_ACT.png",
        },
      ],
      newList:[
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
            {
              title:
                "广东省知识产权保护中心关于举办2022年第五期专利开放许可培训班的通知",
              time: "2022-12-22",
              type: 'service',
              articleId: '1'
            },
          ],
    });

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
    padding-bottom: 5px;
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
    }
  }
  span {
    font-size: 1.25rem;
  }
}
</style>