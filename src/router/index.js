/*
 * @Description: 路由配置页面
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-29 14:56:09
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-01-29 16:43:06
 * @FilePath: /tecc-gz/src/router/index.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../TECCHome.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: '/',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/article',
            name: 'article',
            component: Home
        },


        {
            path: '/service',
            name: 'service',
            component: Home
        },
        {
            path: '/worklist',
            name: 'worklist',
            component: Home
        },
        {
            path: '/examination',
            name: 'examination',
            component: Home
        },
        {
            path: '/advocacy',
            name: 'advocacy',
            component: Home
        },
        {
            path: '/laws',
            name: 'laws',
            component: Home
        },
        {
            path: '/relevant',
            name: 'relevant',
            component: Home
        },
        {
            path: '/experts',
            name: 'experts',
            component: Home
        },
        {
            path: '/testCase',
            name: 'testCase',
            component: Home
        },
        {
            path: '/reports',
            name: 'reports',
            component: Home
        },
        {
            path: '/practice',
            name: 'practice',
            component: Home
        },
    ]
});

export default router;
