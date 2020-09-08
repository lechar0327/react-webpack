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
            }],
            sltNameValue: '',
            username: '',
            age: ''
        };
    }

    changeValue = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };


    init() {
        console.log(12);

    }

    initSltUserInfo = () => {
        let { userinfo } = this.state;
        console.log(userinfo);

        return userinfo.map((ele) => (
            <option key={ele.id} value={ele.id}>{ele.name}</option>
        ));
    }

    render() {
        return (
            <div>
                <select name="" id="" value={this.state.sltNameValue} name="sltNameValue" onChange={this.changeValue}>
                    {this.initSltUserInfo()}
                </select>
                <br />

                <input type="text" name="username" value={this.state.username} onChange={this.changeValue} />

                <input type="text" name="age" value={this.state.age} onChange={this.changeValue} />

                <input type="checkbox" name="isOk" checked={this.state.isOk} onChange={this.chg} />
            </div >

        );
    }
}


