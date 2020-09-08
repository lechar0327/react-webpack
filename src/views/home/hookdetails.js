import React, { Component } from 'react';
import Child from './child';
export default class hookdetails extends Component {

    render() {
        console.log(this.props.history);
        return (
            <div>
                我是hook详情
                <Child></Child>
            </div>
        );
    }
}
