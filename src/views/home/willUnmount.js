import React from 'react';

export default class OldLife extends React.Component {
    constructor(props) {
        super(props);
        //getDefaultProps: 接收初始props
        //getInitialState: 初始化state
    }

    state = {

    }

    componentWillMount() {
        //组件挂载前触发
    }

    render() {
        return (
            <div>

            </div>
        );
    }

    componentDidMount() {
        //组件挂载完成后触发
    }

    componentWillReceiveProps(nextProps) {
        //接收到新的props时触发
    }

    shouldComponentUpdate(nextProps, nextState) {
        //进行性能优化   
        return true;
    }

    componentDidUpdate() {
        //组件更新后触发
    }

    componentWillUnmount() {
        //卸载时触发
        //this.timer&&clearTimeout(this.time
    }
}
