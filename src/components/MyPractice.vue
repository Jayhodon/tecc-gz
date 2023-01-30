<!--
 * @Description: 商标实务 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-30 02:47:11
 * @FilePath: /tecc-gz/src/components/MyPractice.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="main">
    <div class="row">
      <a class="item">
         <img src="../assets/practice_1.jpeg" alt="">
      </a>
      <a class="item">
         <img src="../assets/practice_2.jpeg" alt="">
      </a>
      <a class="item">
         <img src="../assets/practice_3.jpeg" alt="">
      </a>
    </div>

    <div class="row">
      <a class="item">
         <img src="../assets/practice_4.jpeg" alt="">
      </a>
      <a class="item">
         <img src="../assets/practice_5.jpeg" alt="">
      </a>
      <a class="item">
         <img src="../assets/practice_6.jpeg" alt="">
      </a>
    </div>

    <div class="row">
      <a class="item"><img src="../assets/practice_7.jpeg" alt=""></a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "MyPractice",
  props: {
    innerHTML: String,
  },
  components: {},

  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped lang="scss">
.main {
    padding: 10px;
}
.row {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    .item {
        width: 20%;
        height: 150px;
    display: flex;
    justify-content: space-around;
    line-height: 150px;
    }
}
</style>