import React from 'react';

// 发布订阅模式实现
const Event = {
    //存储消息
    cacheList: {},

    /**
     * 订阅消息
     * @param {消息类型} type 
     * @param {回调函数} callback 
     */
    subscribe(type, callback) {
        //如果存在此类型的消息,就push
        if (this.cacheList[type]) {
            this.cacheList[type].push(callback);
        }
        else {
            // 无此类消息,直接赋值回调函数
            this.cacheList[type] = [callback];
        }

    },
    //发布消息
    dispatch(type, data) {
        // 发布消息时,如果没有此类型的消息,直接退出
        if (!this.cacheList[type]) {
            return;
        }
        else {
            //循环执行回调函数
            var currentCache = this.cacheList[type];

            currentCache.map((ele,index)=>{
                currentCache[index](data);
            });
        }
    }
};

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "来自老祖宗的问候",
        };
    }

    //组件订阅消息,此时涉及到一个生命周期,当组件加载完成时执行的钩子函数
    render() {
        return (
            <div>
                <button onClick={() => {
                    Event.dispatch('taggle', this.state.msg);
                }}>我是祖宗组件,我要发布消息</button>
                <Son></Son>
            </div>
        );
    }
}

class Son extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "来自儿子的问候",
        };
    }

    //当组件加载完成时,直接订阅消息
    componentDidMount() {
        Event.subscribe('taggle', (data) => {
            this.setState({
                msg: data
            });
        });
    }

    render() {
        return (
            <div>
                <h1>我是儿子组件,{this.state.msg}</h1>
                <GrandSon></GrandSon>
            </div>
        );
    }
}

class GrandSon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "来自孙子的问候",
        };
    }

    //当组件加载完成时,直接订阅消息
    componentDidMount() {
        Event.subscribe('taggle', (data) => {
            this.setState({
                msg: data
            });
        });
    }
    render() {
        return (
            <div>
                <h1>我是孙子组件,{this.state.msg}</h1>
            </div>
        );
    }
}