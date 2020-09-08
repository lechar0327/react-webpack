import React, { Component } from 'react';

export default class Base extends Component {
    //构造器
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            name: 'liuqiao'
        };
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
        return null;
    }



    render() {
        console.log('render');

        console.log(this.props.match);
        
        return (
            <div>

            </div>
        );
    }

    componentDidMount() {

        console.log('componentDidMount');
        // 开启长连接
        // 开定时器
        // 调接口

        this.timer=setInterval(() => {
            console.log('开启定时器');
        }, 1000); 
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdata(nextProps, nextState) {
        console.log('componentWillUpdata');
        // this.setState({
        //     name:123
        // });
    }

    // getSnapshotBeforeUpdate() {
    //     console.log('getSnapshotBeforeUpdate');
    //     return null;
    // }

    componentDidUpdate() {
        console.log('getSnapshotBeforeUpdate');
    }

    //组件卸载阶段

    componentWillUnmount() {
        this.timer&&clearTimeout(this.timer);
        console.log('componentWillUnmount');

    }



    componentDidCatch() {
        console.log("错误处理");
    }
}
