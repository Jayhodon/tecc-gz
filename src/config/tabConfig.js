/*
 * @Description: 二级页面Tab栏配置
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-26 20:51:54
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-09 11:21:16
 * @FilePath: /tecc-gz/src/config/tabConfig.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */
export const tabConfig = {
  article: [
    {
      type: "article",
      title: "文 章",
      innerHtml: "",
    }
  ],
  service: [
    {
      type: "article",
      title: "服务规范",
      innerHtml: "",
      articleType: "service",
      articleId: '1',
    }
  ],
  worklist: [
    {
      type: "article",
      title: "工作规程",
      innerHtml: "",
      articleType: "worklist",
      articleId: '1',
    }
  ],
  examination: [
    {
      type: "examination",
      title: "业务服务",
    },
  ],
  advocacy: [
    {
      type: "list",
      title: "活动资讯",
      listType:'activeInfo',
      list: [],
    },
    {
      type: "list",
      title: "培训视频",
      listType:'teachVideo',
      list: [],
    },
  ],
  laws: [
    {
      type: "list",
      title: "法律法规",
      listType:'laws',
      list: [],
    }
  ],
  testCase: [
    {
      type: "list",
      title: "典型案例",
      listType:'testCase',
      list: [],
    },
  ],
  reports: [
    {
      type: "list",
      title: "研究报告",
      listType:'reports',
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