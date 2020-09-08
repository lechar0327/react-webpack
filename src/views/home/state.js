//状态提升
import React from 'react';

export default class State extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '我是父亲,共享数据'
        };
    }

    ChangeMsg = (text) => {
        this.setState({
            msg: text
        });
    }

    changMe = () => {
        this.setState({
            msg: '都消停点,不要传了'
        });
    }
    render() {
        return (
            <div>
                {/* 自定义事件,回调函数 */}
                <ChildOne role={this.state.msg} onChangeMsg={this.ChangeMsg}></ChildOne>
                <ChildTwo role={this.state.msg} onChangeMsg={this.ChangeMsg}></ChildTwo>
                <button onClick={this.changMe}>问候一下</button>
            </div>
        );
    }
}

class ChildOne extends React.Component {
    change = () => {
        this.props.onChangeMsg('我把数据传给弟弟');
    }
    render() {
        return (
            <div>
                <h1>我是大儿子 {this.props.role}</h1>
                <button onClick={this.change}>改变</button>
            </div>
        );
    }
}

class ChildTwo extends React.Component {
    change = () => {
        this.props.onChangeMsg('我把数据传给哥哥');
    }
    render() {
        let { role } = this.props;
        return (
            <div>
                <h1>我是小儿子 {this.props.role}</h1>
                <button onClick={this.change}>改变</button>
            </div>
        );
    }
}
