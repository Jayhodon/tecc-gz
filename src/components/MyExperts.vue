<!--
 * @Description: 专家智库 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-30 16:12:05
 * @FilePath: /tecc-gz/src/components/MyExperts.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="main">
    <div class="row" v-if="experts === ''">
      <div
        v-for="item in expertsType"
        :key="item.expertsId"
        @click="handleExperts(item.value)"
        class="item"
      >
        {{ item.title }}
      </div>
    </div>
    <div v-else class="experts-view">
      <div class="back" @click="handleExperts('')">
        <el-icon><Back /></el-icon>
      </div>
      <div
        class="experts-item"
        v-for="(item, index) in expertsList"
        :key="index"
      >
        <div class="img-item">
          <img :src="item.imgUrl" />
        </div>
        <span class="experts-name">专家介绍：{{ item.name }}</span>
        <span class="experts-info">{{ item.info }}</span>
        <span class="experts-tabs">{{ item.tabs }}</span>
        <span class="experts-type">
          <span class="experts-type-title">专家类型:</span>
          <span class="experts-type-value">{{ item.type }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Back } from "@element-plus/icons-vue";
export default {
  name: "MyPractice",
  props: {
    innerHTML: String,
  },
  components: {
    Back,
  },

  setup() {
    const state = reactive({
      expertsType: [
        {
          title: "学术研究",
          value: "academic",
          expertsId: 0,
        },
        {
          title: "商标管理",
          value: "management",
          expertsId: 1,
        },
        {
          title: "商标授权确认",
          value: "confirmation",
          expertsId: 2,
        },
        {
          title: "标准化研究",
          value: "standardization",
          expertsId: 3,
        },
        {
          title: "政策研究",
          value: "policy",
          expertsId: 4,
        },
        {
          title: "商标维权保护",
          value: "protection",
          expertsId: 5,
        },
        {
          title: "知识产权金融",
          value: "finance",
          expertsId: 6,
        },
        {
          title: "人文地理",
          value: "geography",
          expertsId: 7,
        },
      ],
      expertsList: [
        {
          imgUrl:
            "http://pic.imeitou.com/uploads/allimg/210717/3-210GG64111.jpg",
          name: "黄敏聪",
          info: "暨南大学社会科学部副教授,法学院国际法专业硕士生指导",
          tabs: "暨南大学社会科学部副教授",
          type: "战略管理类",
        },
        {
          imgUrl:
            "http://pic.imeitou.com/uploads/allimg/210717/3-210GG64111.jpg",
          name: "李静",
          info: "暨南大学社会科学部副教授,法学院国际法专业硕士生指导",
          tabs: "暨南大学社会科学部副教授",
          type: "战略管理类",
        },
        {
          imgUrl:
            "http://pic.imeitou.com/uploads/allimg/210717/3-210GG64111.jpg",
          name: "任艳",
          info: "暨南大学社会科学部副教授,法学院国际法专业硕士生指导",
          tabs: "暨南大学社会科学部副教授",
          type: "战略管理类",
        },
        {
          imgUrl:
            "http://pic.imeitou.com/uploads/allimg/210717/3-210GG64111.jpg",
          name: "任艳",
          info: "暨南大学社会科学部副教授,法学院国际法专业硕士生指导",
          tabs: "暨南大学社会科学部副教授",
          type: "战略管理类",
        },
        {
          imgUrl:
            "http://pic.imeitou.com/uploads/allimg/210717/3-210GG64111.jpg",
          name: "任艳",
          info: "暨南大学社会科学部副教授,法学院国际法专业硕士生指导",
          tabs: "暨南大学社会科学部副教授",
          type: "战略管理类",
        },
      ],
      experts: "",
    });

    // 智库类型点击事件
    const handleExperts = (type) => {
      console.log(type);
      state.experts = type;
    };

    return {
      ...toRefs(state),
      handleExperts,
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
  align-items: center;
  .item {
    margin: 20px;
    width: 20%;
    background: url("../assets/experts.jpeg");
    height: 150px;
    display: flex;
    font-size: 20px;
    color: #7a0a0a;
    justify-content: space-around;
    line-height: 150px;
  }
  :hover {
    cursor: pointer;
  }
}

.experts-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .experts-item {
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    align-items: center;
    margin: 20px;
    padding: 5px;
    .img-item {
      margin: 5px;
      width: 280px;
      height: 280px;
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
    }
    .experts-name {
      font-size: 22px;
      font-weight: bold;
      margin: 5px;
      color: #646464;
    }
    .experts-info {
      font-size: 14px;
      margin: 5px 25px;
      color: #797979;
    }
    .experts-tabs {
      font-size: 14px;
      margin: 5px 25px;
      color: #53a0d1;
    }
    .experts-type-title {
      font-size: 14px;
      margin: 5px;
      color: #797979;
    }

    .experts-type-value {
      font-size: 14px;
      margin: 5px;
      color: #53a0d1;
    }
  }
  .back {
    font-size: 30px;
    position: absolute;
    top: -8px;
    right: 15px;
    color: #5e5e5e;
    :hover {
      cursor: pointer;
      color: #3e97f5;
    }
  }
}
</style>