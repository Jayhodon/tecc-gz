/*
 * @Description: 页面借口集合
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-02-05 00:56:44
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-05 23:57:10
 * @FilePath: /tecc-gz/src/api/httpRequest.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */
import axios from 'axios';
import { ElMessageBox } from 'element-plus';

// 服务端域名配置
const baseHttp = "http://localhost"
const CancelToken = axios.CancelToken;
const cancelArr = [];

const baseAxios = (postUrl) => {
    let cancel;
    return axios
        .post(postUrl, {
            cancelToken: new CancelToken(function executor(c) {
                cancel = { cancel: c };
                cancelArr.push(cancel);
            }),
            timeout: 30000
        })
        .then(
            // 成功处理
            (response) => {
                if (response.data.code && response.data.code !== 0) {
                    ElMessageBox.confirm(response.data.msg, 'Warning', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning',
                        customStyle: { 'z-index': 9999 }
                    })
                }
                return response;
            }
        )
        .catch(function (error) {
            // 请求中断处理
            if (axios.isCancel(error)) {
                console.log('Request canceled post');
                return;
            } else {
                // 处理超时
                if (
                    error.isAxiosError &&
                    !error.response &&
                    error.request &&
                    error.message.startsWith('timeout')
                ) {
                    // TODO 处理超时
                    ElMessageBox.confirm('Oops! 请求超时了 o.O', '请求服务端超时', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        dangerouslyUseHTMLString: true,
                        type: 'warning',
                        customStyle: { 'z-index': 9999 }
                    });
                    return;
                }
                ElMessageBox.confirm(
                    `Oops! 请检查与服务器的连接状态 _(:з」∠)_<br/>
                ${postUrl}<br/>
        `,
                    '请求服务端失败',
                    {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        dangerouslyUseHTMLString: true,
                        type: 'warning',
                        customStyle: { 'z-index': 9999 }
                    }
                );
            }
        });
}

/**
 * @description: 首页首屏加载链接
 * @param {any}
 * @return {*}
 */
export function getIndexUrlList(pageNum, pageSize) {
    return baseAxios(baseHttp + `/dev-api/indexurl/indexurl/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 轮播图对象
 * @param {any}
 * @return {*}
 */
export function getSwiperList(pageNum, pageSize) {
    return baseAxios(baseHttp + `h/dev-api/swiper/swiper/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 导航对象
 * @param {any}
 * @return {*}
 */
export function getNavList() {
    return baseAxios(baseHttp + `/dev-api/nav/nav/list`).then((res) => {
        return res;
    });
}

/**
 * @description: 文章获取所有列表
 * @param {any}
 * @return {*}
 */
export function getArticleList(pageSize, pageNum) {
    return baseAxios(baseHttp + `/dev-api/article/article/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 获取单个文章
 * @param {any}
 * @return {*}
 */
export function getArticle(articleId) {
    return baseAxios(baseHttp + `/dev-api/article/article/${articleId}`).then((res) => {
        return res;
    });
}

/**
 * @description: 查询文章链接
 * @param {any}
 * @return {*}
 */
export function getArticleUrl(pageNum,pageSize,type,id) {
    return baseAxios(baseHttp + `/dev-api/article/article/list?pageNum=${pageNum}&pageSize=${pageSize}&type=${type}&id=${id}`).then((res) => {
        return res;
    });
}

/**
 * @description: 业务服务
 * @param {any}
 * @return {*}
 */
export function getBusinessServicesList() {
    const pageNum = 1
    const pageSize = 10
    return baseAxios(baseHttp + `/dev-api/business_services/business_services/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 获取单个
 * @param {any}
 * @return {*}
 */
export function getBusinessServices() {
    return baseAxios(baseHttp + `/dev-api/business_services/business_services/1`).then((res) => {
        return res;
    });
}

/**
 * @description: 商标实务
 * @param {any}
 * @return {*}
 */
export function getTrademarkList(pageNum,pageSize) {
    return baseAxios(baseHttp + `/dev-api/trademark/trademark/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 专家类型
 * @param {any}
 * @return {*}
 */
export function getExpertsType() {
    const pageNum = 1
    const pageSize = 10
    return baseAxios(baseHttp + `/dev-api/experts_type/experts_type/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 专家列表
 * @param {any}
 * @return {*}
 */
export function getExpertsList(pageNum,pageSize) {
    return baseAxios(baseHttp + `/dev-api/experts_list/experts_list/list?pageNum=${pageNum}&pageSize=${pageSize}`).then((res) => {
        return res;
    });
}

/**
 * @description: 取某一个
 * @param {any}
 * @return {*}
 */
export function getExperts(articleId) {
    return baseAxios(baseHttp + `/dev-api/experts_list/experts_list/${articleId}`).then((res) => {
        return res;
    });
}





