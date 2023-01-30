<!--
 * @Description: 信息列表 List compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-29 17:08:52
 * @FilePath: /tecc-gz/src/components/MyList.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="common_hd">
    <ul class="tit clearfix">
      <li class="on">
        <a href="#" target="_parent">最新动态列表</a>
      </li>
    </ul>
    <!-- <span class="more"
      ><a
        href="https://www.gippc.com.cn/ippc/tzgg/common_list.shtml"
        target="_parent"
        >更多 &gt;
      </a></span
    > -->
  </div>
  <div class="common_bd">
    <ul class="common_newslist">
      <li v-for="(item, index) in newslist" :key="index">
        <a
          @click="handleUrl(item.type, item.articleId)"
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
      @current-change='handlePage'
      :total="newslist.length"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter }  from "vue-router";
export default {
  name: "MyList",
  props: {
    list: Array,
  },
  components: {},
  setup(props) {
    const router = useRouter()
    const state = reactive({
      newslist: props.list,
    });

    const handleUrl = (type, id) => {
      router.push({
        path: "/article",
        query: {
            type:type,
            articleId:id
        },
      });
    };

    const handlePage = (val)=>{
        console.log(val);
    }

    return {
      ...toRefs(state),
      handleUrl,
      handlePage
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
</style>