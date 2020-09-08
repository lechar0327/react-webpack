import { observable, action } from 'mobx';

import fetch from '../../utils/index'
export default class Cnblog {
    //定义一个数组
    @observable list = [];

    @action getCnblogsList(params) {
        fetch.cnblogapi.getCnblogsList(params).then((res) => {
            console.log(res);
        });
    }
}

