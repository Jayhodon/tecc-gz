/*
 * @Description: 首页nav栏目配置
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-26 20:51:54
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-05 01:39:36
 * @FilePath: /tecc-gz/src/config/navConfig.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */
export const navConfig = [
    {
        value: "首页",
        type: "home",
        navId: 0,
    },
    {
        value: "站点介绍",
        children: [
            {
                value: "服务规范",
                type: "service",
            },
            {
                value: "工作规程",
                type: "worklist",
            },
        ],
        navId: 1,
    },
    {
        value: "商标审查",
        type: "examination",
        navId: 2,
    },
    {
        value: "宣传培训",
        type: "advocacy",
        navId: 3,
    },
    {
        value: "法律法规",
        type: "laws",
        navId: 4,
    },
    {
        value: "专家智库",
        type: "experts",
        navId: 5,
    },
    {
        value: "商标品牌研究",
        children: [
            {
                value: "典型案例",
                type: "testCase",
            },
            {
                value: "研究报告",
                type: "reports",
            },
            {
                value: "商标实务",
                type: "practice",
            },
        ],
        navId: 6,
    },
]
