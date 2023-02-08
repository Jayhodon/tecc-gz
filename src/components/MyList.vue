<!--
 * @Description: 信息列表 List compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-07 19:50:07
 * @FilePath: /tecc-gz/src/components/MyList.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="common_hd">
    <ul class="tit clearfix">
      <li class="on">
        <a href="#" target="_parent">{{ listTitle }}</a>
      </li>
    </ul>
  </div>
  <div v-if="newslist.length > 0">
    <div class="common_bd">
      <ul class="common_newslist">
        <li v-for="(item, index) in newslist" :key="index">
          <!-- 链接类型文章以及文本类型文章 -->
          <a
            v-if="item.type === 'url'"
            :href="item.url"
            target="_blank"
            :title="item.title"
            >{{ item.title }}</a
          >
          <a
            v-else
            @click="
              handleInnerHtml(item.type, item.title,item.articleType, item.articleId)
            "
            target="_blank"
            :title="item.title"
            >{{ item.title }}</a
          >
          <span> {{ item.time }} </span>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handlePage"
        :current-page="currentPage"
        :total="articleList.length"
        :page-size="pageSize"
      />
    </div>
  </div>
  <div class="null-data" v-else>
    <span>暂无数据</span>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
// import { getArticleList } from "../api/httpRequest";
import { listConfig } from "../config/listConfig";
export default {
  name: "MyList",
  props: {
    title: String,
    listType: String,
  },
  components: {},
  setup(props) {
    const router = useRouter();
    const state = reactive({
      articleList: [],
      newslist: [],
      pageSize: 10,
      currentPage: 1,
      listTitle: props.title,
    });

    // 分页处理回调
    const handlePage = (val) => {
      state.currentPage = val;
      state.newslist = [];
      for (
        let i = (state.currentPage - 1) * 10;
        i < (state.currentPage - 1) * 10 + state.pageSize;
        i++
      ) {
        state.articleList?.[i]?.title &&
          state.newslist.push({
            title: state.articleList?.[i]?.title,
            time: state.articleList?.[i]?.time,
            type: state.articleList?.[i]?.type,
            url: state.articleList?.[i]?.url,
            articleType: state.articleList?.[i]?.articleType,
            articleId: state.articleList?.[i]?.articleId,
          });
      }
    };

    // 初始化文章列表
    const changeArticleList = () => {
      state.listTitle = props.title;
      if (props.listType === "all") {
        state.articleList = listConfig;
      } else {
        state.articleList = listConfig.filter(
          (item) => item.articleType === props.listType
        );
      }
      handlePage(1);
      // getArticleList(1, 10)
      //   .then((res) => {
      //     console.log(res);
      //     res.rows.forEach((item) => {
      //       state.newList.push({
      //         title: item.title,
      //         time: item.time,
      //         type: item.type,
      //         articleId: item.id,
      //       });
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };

    const init = () => {
      changeArticleList();
    };
    init();

    // innerhtme文章跳转
    const handleInnerHtml = (type, articleTitle,articleType, id) => {
      router.push({
        path: "/article",
        query: {
          type: type,
          articleType: articleType,
          articleId: id,
          articleTitle: articleTitle
        },
      });
    };

    watch(
      props,
      () => {
        init();
      },
      { immediate: true, deep: true }
    );

    return {
      ...toRefs(state),
      handleInnerHtml,
      handlePage,
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

.pagination {
  display: flex;
  justify-content: center;
}

.null-data {
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #545454;
}
</style>