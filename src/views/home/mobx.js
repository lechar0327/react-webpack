import React, { Component } from 'react';

//引入mobx 
import { observer, inject } from 'mobx-react';
import httpapi from '@/utils/index'

@inject('store')
@observer
class mobx extends Component {
    componentDidMount() {

        console.log(this.props);
        //console.log(httpapi);
        let parmas = {
            page: 1,
            tab: '',
            limit: 10,
            mdrender: false
        };
        httpapi.cnblogapi.getCnblogsList(parmas).then((res) => {
            console.log(res);
        });

        let data = {
            page: 1,
            size: 10
        };
        httpapi.cnblogapi.queryBanner(data).then((res) => {
            console.log(res);
        });

    }

    render() {
        let {todo} =this.props.store;

        console.log(todo);
        return (
            <div>
                <h1>{todo.count}</h1>
            </div>
        );
    }
}

export default mobx;