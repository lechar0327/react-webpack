//列表渲染
import React from 'react';

export default class list extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo: [{
                id: 1,
                name: 'liuqiao',
                age: 18
            }, {
                id: 2,
                name: 'zhangsan',
                age: 28
            }, {
                id: 3,
                name: 'xiaoming',
                age: 38
            }]
        };
    }

    //初始化数据
    initList() {
        //解构获取数据
        let { userinfo } = this.state;
        //返回结果
        let res = [];
        userinfo.map(ele => {
            ele.id *= 2;
            res.push(
                <div key={ele.id} onClick={this.showDetails.bind(this, ele)}>
                    <span>id:{ele.id}</span>
                    <span>name:{ele.name}</span>
                    <span>age:{ele.age}</span>
                    <br />
                </div>
            );
        });
        return res;
    };


    showDetails(ele) {
        console.log(this.props.match);
        this.props.history.push("/hook/detail/" + ele.id + "/" + ele.name);
    };


    render() {
        return (
            <div>
                {this.initList()}
            </div>
        );
    }
}
