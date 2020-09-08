//子组件通信父组件
import React from 'react';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '我是父组件'
        };
    }

    handleClick = text => {
        this.setState({
            name: text
        });
    }
    render() {
        return (
            <div>
                {this.state.name}
                <Son handleClick={this.handleClick}></Son>
            </div>
        );
    }
}


class Son extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '我要向父组件传递数据'
        };
    }

    render() {
        return (
            <div>
                <button onClick={
                    () => {
                        this.props.handleClick(this.state.msg);
                    }
                }>按钮</button>
            </div>
        );
    }
}
