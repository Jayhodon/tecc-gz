<!--
 * @Description: 活动详情 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-09 11:19:31
 * @FilePath: /tecc-gz/src/components/MyArticle.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div id="innerHtml"></div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
// import { getArticleUrl } from "../api/httpRequest";
import { articleInnerHtml } from "../config/innerHtmlTest";
import { useRouter } from "vue-router";
export default {
  name: "MyArticle",
  props: {
    articleType: String,
    articleId: Number,
  },
  components: {},

  setup(props) {
    const state = reactive({});

    const router = useRouter();

    watch(
      props,
      (newProps) => {
        setTimeout(() => {
          // const router = useRouter();
          let param = {
            articleType:
              newProps.articleType ||
              router.currentRoute.value.query.articleType,
            articleId:
              newProps.articleId || router.currentRoute.value.query.articleId,
          };
          let dom = document.getElementById("innerHtml");
          // getArticleUrl(param.articleType, param.articleId).then((res) => {
          //   dom.innerHTML = res.rows[0].innerHTML;
          // });
          console.log(param, articleInnerHtml[param.articleType]);
          let innerhtml = articleInnerHtml[param.articleType].filter(
            (item) => item.articleId === param.articleId
          )[0];
          console.log(innerhtml);
          dom.innerHTML = innerhtml?.content;
        }, 300);
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
</style>