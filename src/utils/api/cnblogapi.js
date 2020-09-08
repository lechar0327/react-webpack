import fetch from './fetch'
//注册接口
function getCnblogsList(params) {
    return fetch({
        method: "GET",
        url: "/cnode/api/v1/topics",
        params
    });
}

//获取推荐商品
function queryBanner(params) {
    return fetch({
        method: "Get",
        url: "/api/banner/queryBanner",
        params
    });
}

export default {
    getCnblogsList,
    queryBanner
}

