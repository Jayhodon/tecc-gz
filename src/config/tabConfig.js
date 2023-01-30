/*
 * @Description: 二级页面Tab栏配置
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-26 20:51:54
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-29 17:26:18
 * @FilePath: /tecc-gz/src/config/tabConfig.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */
export const tabConfig = {
  article: [
    {
      type: "article",
      title: "文章内容",
      innerHtml: "",
    }
  ],
  service: [
    {
      type: "article",
      title: "服务规范",
      innerHtml: "",
    }
  ],
  worklist: [
    {
      type: "article",
      title: "工作规程",
      innerHtml: "",
    }
  ],
  examination: [
    {
      type: "examination",
      title: "业务服务",
    },
    {
      type: "list",
      title: "业务资讯",
      list: [],
    }
  ],
  advocacy: [
    {
      type: "list",
      title: "活动通知",
      list: [],
    },
    {
      type: "list",
      title: "培训资料",
      list: [],
    },
    {
      type: "list",
      title: "培训视频",
      list: [],
    },
  ],
  laws: [
    {
      type: "list",
      title: "法律法规",
      list: [],
    }
  ],
  relevant: [
    {
      type: "list",
      title: "有关条例",
      list: [],
    },
  ],
  testCase: [
    {
      type: "list",
      title: "典型案例",
      list: [],
    },
  ],
  reports: [
    {
      type: "list",
      title: "研究报告",
      list: [],
    },
  ],
  practice: [
    {
      type: "practice",
      title: "商标实务",
    },
  ],
  experts: [
    {
      type: "experts",
      title: "专家智库",
    },
  ],
}