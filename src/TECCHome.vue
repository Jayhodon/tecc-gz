<!--
 * @Description: 广东商标协会主页
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-16 11:01:41
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-10 15:06:48
 * @FilePath: /tecc-gz/src/TECCHome.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <!-- top_bar 首页顶部栏 -->
  <div class="top_bar boxMo clearfix">
    <div class="layout">
      <!-- <ul class="top_bar_list">
        <li class="user-item">
          <div class="user-icon-content">
            <el-icon class="user-icon">
              <UserFilled />
            </el-icon>
          </div>
          <a
            class="selflink"
            href="http://tyrz.gd.gov.cn/tif/sso/static/?client_id=gdbsYSS&amp;redirect_uri=http%3A%2F%2Fwww.gdzwfw.gov.cn%2F_goin_%2F%3Fr%3D%252F_in_%252F%253Fr%253D%25252Fportal%25252Fbranch-hall%25253ForgCode%25253DMB2D02343%2526p%253Dportal&amp;response_type=code&amp;scope=all&amp;service=initService"
          >
            <span class="selflink-text">个人中心</span>
          </a>
        </li>
      </ul> -->
    </div>
  </div>
  <!-- header 首页头部背景版 -->
  <div class="header">
    <div class="headerIcon">
      <div class="logo"></div>
    </div>
  </div>
  <!-- nav 导航栏 -->
  <div class="nav boxMo marB40">
    <div class="nav_con">
      <div
        class="nav_tem clearfix"
        v-for="(item, index) in navObjList"
        :key="index"
      >
        <a v-if="item.type" class="nav_link" @click="changeRouter(item.type)">{{
          item.value
        }}</a>
        <div v-else-if="item.children">
          <a class="nav_link">{{ item.value }}</a>
          <div class="nav_sublist">
            <div class="layout">
              <a
                v-for="(ele, childId) in item.children"
                :key="childId"
                @click="changeRouter(ele.type)"
                >{{ ele.value }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 首页组件 -->
  <Home v-if="route === 'home'"></Home>

  <!-- 非首页组件 -->
  <Service v-if="route !== 'home' && route !== ''" :route="route"></Service>

  <!-- footer 协会信息 -->
  <div class="wrap container">
    <!--link-->
    <div class="link clearfix">
      <div class="wrap">
        <div class="home_link common_tab">
          <div class="common_hd hd">
            <ul class="clearfix">
              <li class="on">联系我们</li>
            </ul>
          </div>
          <div class="clear"></div>
          <div class="bd clearfix">
            <div class="article-content">
              <div class="article-content-item">
                <p>站点名称：广东省商标品牌指导示范站</p>
              </div>
              <div class="article-content-item">
                <p>联系方式：020-83772305</p>
              </div>
              <div class="article-content-item">
                <p>地 址：广州市越秀区流花路117号 —— 12、14号楼</p>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <!--link End-->

    <!-- footer 页尾-->
    <div class="footer">
      <div class="clearfix">
        相关链接：
        <a
          href="https://4021480981145.zhan.n.weimob.com/saas/zhan/4021480981145/1734121/index"
          >广东省商标品牌指导示范站小程序</a
        >
      </div>
      <div class="clearfix">
        <span
          >版权所有：广州商标审查协作中心（广东省知识产权开发与服务中心）</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
// import { UserFilled } from "@element-plus/icons-vue";
import Home from "./pages/HomePage.vue";
import Service from "./pages/ServicePage.vue";
import { useRouter } from "vue-router";
import { navConfig } from "./config/navConfig";
// import {getNavList} from "./api/httpRequest";

export default {
  name: "TECCHome",
  props: {
    msg: String,
  },
  components: {
    Home,
    Service,
    // UserFilled,
  },
  setup: () => {
    const router = useRouter();
    const state = reactive({
      route: router.currentRoute.value.query.type || "home",
      navObjList: navConfig,
    });

    // 初始化导航对象
    // const handleNavList = () => {
    //   getNavList().then(res=>{
    //     res.data.forEach(item => {
    //       state.navObjList.push(item)
    //     });
    //   })
    // }

    // const init = () => {
    //   handleNavList()
    // }
    // init()

    // 路由切换
    const changeRouter = (type) => {
      state.route = type;
      router.push({
        path: "/" + type,
        query: {
          type: type,
        },
      });
    };

    changeRouter(state.route);

    // 监听路由切换
    watch(
      () => router.currentRoute.value.query.type,
      (toPath) => {
        state.route = toPath;
      },
      { immediate: true, deep: true }
    );

    return {
      ...toRefs(state),
      changeRouter,
    };
  },
};
</script>

<style scoped lang="scss">
.user-item {
  display: flex;
  align-items: center;
  .user-icon-content {
    margin-right: 10px;
    background-color: #717886;
    height: 24px;
    width: 24px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    .user-icon {
      font-size: 20px;
      width: 22px;
      height: 24px;
    }
  }
  .selflink-text {
    color: #ececec;
  }
}

.headerIcon {
  width: 100%;
  height: 300px;
  background: url("./assets/home/homeBanner.jpeg");
  background-size: 100%;
}

.top_bar {
  height: 40px;
  background-color: #354d7a;
}

.logo {
  top: 100px;
  left: 100px;
  font-size: 32px;
  padding: 0;
  font-weight: bold;
  color: #bbbbbb;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  .nav_link {
    color: #ececec;
  }
}

.link {
  padding: 0;
  .article-content {
    display: flex;
    justify-content: space-around;
    .article-content-item {
      font-size: 22px;
      font-weight: bold;
      margin: 20px;
      color: #788395;
    }
  }
}

.footer {
  padding: 10px;
}
</style>
