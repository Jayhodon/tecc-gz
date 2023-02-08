/*
 * @Description: 二级页面Tab栏配置
 * @Version: 1.0
 * @Author: tangjiahao
 * @Date: 2023-01-26 20:51:54
 * @LastEditors: tangjiahao
 * @LastEditTime: 2023-02-08 20:52:58
 * @FilePath: /tecc-gz/src/config/innerHtmlTest.js
 * Copyright (C) 2023 tangjiahao. All rights reserved.
 */
import { testCase_1 } from "./innerHtml/testCase/testCase_1";
import { testCase_2 } from "./innerHtml/testCase/testCase_2";
import { testCase_3 } from "./innerHtml/testCase/testCase_3";
import { testCase_4 } from "./innerHtml/testCase/testCase_4";
import { testCase_5 } from "./innerHtml/testCase/testCase_5";
import { testCase_6 } from "./innerHtml/testCase/testCase_6";
import { testCase_7 } from "./innerHtml/testCase/testCase_7";

import { reports_1 } from "./innerHtml/reports/reports_1";
import { reports_2 } from "./innerHtml/reports/reports_2";

import { activeInfo_1 } from "./innerHtml/activeInfo/activeInfo_1";
import { activeInfo_2 } from "./innerHtml/activeInfo/activeInfo_2";
import { activeInfo_3 } from "./innerHtml/activeInfo/activeInfo_3";
import { activeInfo_4 } from "./innerHtml/activeInfo/activeInfo_4";

import { service_1 } from "./innerHtml/service/service_1";

import { worklist_1 } from "./innerHtml/worklist/worklist_1";


export const articleInnerHtml = {
    reports: [
        {
            articleId: '1',
            content: reports_1
        },
        {
            articleId: '2',
            content: reports_2
        },
    ],
    testCase: [
        {
            articleId: '1',
            content: testCase_1
        },
        {
            articleId: '2',
            content: testCase_2
        },
        {
            articleId: '3',
            content: testCase_3
        },
        {
            articleId: '4',
            content: testCase_4
        },
        {
            articleId: '5',
            content: testCase_5
        },
        {
            articleId: '6',
            content: testCase_6
        },
        {
            articleId: '7',
            content: testCase_7
        }
    ],
    activeInfo: [
        {
            articleId: '1',
            content: activeInfo_1
        },
        {
            articleId: '2',
            content: activeInfo_2
        },
        {
            articleId: '3',
            content: activeInfo_3
        },
        {
            articleId: '4',
            content: activeInfo_4
        }
    ],
    worklist: [
        {
            articleId: '1',
            content: worklist_1
        }
    ],
    service: [
        {
            articleId: '1',
            content: service_1
        }
    ],
}