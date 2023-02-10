<!--
 * @Description: 商标实务 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-10 14:51:41
 * @FilePath: /tecc-gz/src/components/MyPractice.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="main">
    <div class="row">
      <a target="_blank" class="item" v-for="(item, index) in info" :key="index" :href="item.url">
        <img :src="item.imgUrl" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
// import { getTrademarkList } from "../api/httpRequest";
export default {
  name: "MyPractice",
  props: {},
  components: {},

  setup() {
    const state = reactive({
      info: [
        {
          url: "https://sbj.cnipa.gov.cn/sbj/sbsq/zclct/200902/t20090205_623.html",
          imgUrl: require("../assets/practice/practice_1.jpeg"),
        },
        {
          url: "https://sbj.cnipa.gov.cn/sbj/sbsq/sfbz/",
          imgUrl: require("../assets/practice/practice_2.jpeg"),
        },
        {
          url: "https://sbj.cnipa.gov.cn/sbj/sbsq/sphfwfl/",
          imgUrl: require("../assets/practice/practice_3.jpeg"),
        },
        {
          url: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsbj.cnipa.gov.cn%2Fsbj%2Fsbsq%2Fsqss%2F202112%2FW020221128315844050165.docx&wdOrigin=BROWSELINK",
          imgUrl: require("../assets/practice/practice_4.jpeg"),
        },
        {
          url: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsbj.cnipa.gov.cn%2Fsbj%2Fsbsq%2Fsqss%2F202112%2FW020221128315844074192.docx&wdOrigin=BROWSELINK",
          imgUrl: require("../assets/practice/practice_5.jpeg"),
        },
        {
          url: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsbj.cnipa.gov.cn%2Fsbj%2Fsbsq%2Fsqss%2F202112%2FW020221128315844074051.docx&wdOrigin=BROWSELINK",
          imgUrl: require("../assets/practice/practice_6.jpeg"),
        },
        {
          url: "https://sbj.cnipa.gov.cn/sbj/tzgg/202212/W020221227290662367020.pdf",
          imgUrl: require("../assets/practice/practice_7.jpeg"),
        },
      ],
    });

    const handleTrademarkList = () => {
      // getTrademarkList().then((res) => {
      //   res.rows.forEach((item) => {
      //     state.info.push({
      //       url: item.url,
      //       imgUrl: item.imgUrl,
      //     });
      //   });
      // });
    };

    const init = () => {
      handleTrademarkList();
    };

    init();

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
  flex-wrap: wrap;
  .item {
    width: 30%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    line-height: 150px;
  }
}
</style>