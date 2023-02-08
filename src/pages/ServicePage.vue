<!--
 * @Description: 非首页 router 页面
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-07 19:46:06
 * @FilePath: /tecc-gz/src/pages/ServicePage.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="layout">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="index"
        :label="item.title"
        :name="item.title"
      >
        <!-- 列表页组件 -->
        <List v-if="item.type === 'list'" :listType='item.listType' :title='item.title'></List>
        <!-- 文章页组件 -->
        <Article
          v-else-if="item.type === 'article'"
          :articleType="item.articleType"
          :articleId="item.articleId"
        ></Article>
        <!-- 商标实务组件 -->
        <Practice v-else-if="item.type === 'practice'"></Practice>
        <!-- 专家智库组件 -->
        <Experts v-else-if="item.type === 'experts'"></Experts>
        <!-- 商标审查组件 -->
        <Examination v-else-if="item.type === 'examination'"></Examination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import List from "../components/MyList.vue";
import Article from "../components/MyArticle.vue";
import Practice from "../components/MyPractice.vue";
import Experts from "../components/MyExperts.vue";
import Examination from "../components/MyExamination.vue";
import { useRouter } from "vue-router";
import { tabConfig } from "../config/tabConfig";
export default {
  name: "ServicePage",
  props: {
    route: String,
  },
  components: {
    List,
    Article,
    Practice,
    Experts,
    Examination,
  },
  setup(props) {
    const state = reactive({
      tabList: tabConfig?.[props.route],
      activeName: tabConfig?.[props.route]?.[0]?.title,
    });
    const router = useRouter();
    // 监听首页nav栏目变化
    watch(
      props,
      (newProps) => {
        state.tabList = tabConfig[newProps.route] || router.currentRoute.value.query.type;
        state.activeName = tabConfig[newProps.route]?.[0]?.title;
        console.log(newProps,tabConfig[newProps.route]);
      },
      { immediate: true, deep: true }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped lang="scss">
.layout {
  width: 1280px;
  padding: 10px 20px;
  border: 2px dashed #ccc;
}

::v-deep .el-tabs--top .el-tabs__item {
  font-size: 22px;
}
</style>