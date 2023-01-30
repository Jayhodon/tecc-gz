<!--
 * @Description: 活动详情 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-29 17:12:16
 * @FilePath: /tecc-gz/src/components/MyArticle.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div id="innerHtml"></div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "MyArticle",
  props: {
    innerHTML: String,
  },
  components: {},


  setup(props) {
    const state = reactive({});
    watch(props, (newProps) => {
      let dom = document.getElementById("innerHtml");
      dom.innerHTML = newProps.innerHTML;
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped lang="scss">
</style>