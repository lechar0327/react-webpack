import React, { Component } from 'react';

//引入withRouter高阶组件
import { withRouter } from 'react-router-dom';
class Child extends Component {
    To = () => {
        //打印路由的history对象
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <button onClick={this.To}>子组件按钮</button>
            </div>
        );
    }
}
// 调用高阶组件
export default withRouter(Child);
