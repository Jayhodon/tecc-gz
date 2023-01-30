<!--
 * @Description: 商标审查 compontent
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-25 16:22:07
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-30 01:27:53
 * @FilePath: /tecc-gz/src/components/MyExamination.vue
 * Copyright (C) 2023 tangjiahao. All rights reserved.
-->
<template>
  <div class="row">
    <div class="title">
      <span class="icon-title">
        <el-icon><Document /></el-icon>
        <span>服务简介</span>
      </span>
    </div>
    <div class="info-content">
      {{ info.content }}
      <span>
        <a class="info-detail" href="#">[ 查看详情 ]</a>
      </span>
    </div>
  </div>

  <div class="row">
    <div class="title">
      <span class="icon-title">
        <el-icon><Cpu /></el-icon>
        <span>服务系统</span>
      </span>
    </div>
    <div class="system-content">
      <div class="system-content-item">
        <span>
          <a href="#">商标网上申请系统</a>
        </span>
      </div>
      <div class="system-content-item">
        <span>
          <a href="#">商标检索</a>
        </span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="title">
      <span class="icon-title">
        <el-icon><DataLine /></el-icon>
        <span>服务流程</span>
      </span>
    </div>
    <div class="flow-chart-content">
      <a href="#">
        <img src="../assets/flow_chart.png" />
      </a>
    </div>
  </div>
  <div class="row">
    <div class="title">
      <span class="icon-title">
        <el-icon><Download /></el-icon>
        <span>资料下载</span>
      </span>
      <span class="more">
        <a href="#">更多 ></a>
      </span>
    </div>
    <div class="download-content">
      <ul>
        <li>
          <a href="#">商标业务缴费指南</a>
        </li>
        <li>
          <a href="#">广州商标审查协作中心受理业务明细</a>
        </li>
        <li>
          <a href="#">《小明与商标的故事》宣传折页系列材料201912版-上</a>
        </li>
        <li>
          <a href="#">《小明与商标的故事》宣传折页系列材料201912版-下</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Document, Cpu, DataLine, Download } from "@element-plus/icons-vue";
export default {
  name: "MyExamination",
  props: {
    innerHTML: String,
  },
  components: {
    Document,
    Cpu,
    DataLine,
    Download,
  },

  setup() {
    const state = reactive({
      info: {
        content: `接受国家知识产权局商标局委托，承担商标相关业务的现场申请受理及商标注册申请的形式审查、商标注册申请的实质审查，以及商标变更转让续展申请审查、地理标志商标审查、马德里国际注册商标、商标专用权质权登记等工作；承办知识产权局商标局、商标评审委员会交办的其他事项。`,
      },
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped lang="scss">
.row {
  margin-bottom: 60px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
  .icon-title {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
}

.more {
  font-size: 16px;
  float: right;
  margin-right: 100px;
  font-weight: normal;
}

.info-content {
  text-indent: 2em;
  margin-bottom: 20px;
}

.info-detail {
  color: red;
  padding-left: 10px;
}

.system-content {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  .system-content-item {
    display: flex;
    justify-content: space-evenly;
    width: 35%;
    height: 48px;
    align-items: center;
    border: 1px solid #c5d5e6;
    a {
      color: #2472c2;
    }
  }
  :hover {
    background-color: rgb(227, 236, 247);
  }
}

.flow-chart-content {
  :hover {
    background-color: rgba(227, 236, 247, 0.2);
  }
}

.download-content {
  li {
    list-style: inside;
    width: 50%;
    float: left;
    position: relative;
    left: 50px;
    margin: 10px 0;
  }
}
</style>