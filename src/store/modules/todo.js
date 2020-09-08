import { observable, action } from 'mobx';
export default class TodoStore {
    //定义共享数据 装饰器语法
    @observable count =5;

    @action changeCount(payload) {
        if (payload == "add") {
            this.count++;
        }
        else {
            this.count--;
        }
    }
}