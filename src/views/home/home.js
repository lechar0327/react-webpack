
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'xiaoming',
            data: {
                name: 'liuqiao',
                age: 18
            }
        };
    }

    changeAge() {

        // let newData = { ...this.state.data };
        // newData.age=30;



        let data=this.state.data;
        data.age=30;

        this.setState({
            data
        });

        // data.name='zhangsanfeng';
        // this.setState({
        //     data
        // });

        // data.age=20;
        // this.setState({
        //     data
        // });

        // let newData = Object.assign(this.state.data, {
        //     ['age']: 30
        // });
        // this.setState({
        //     data: newData
        // });

        
    }

    changeName() {
        this.setState({
            data: {
                name: 'zhangsan',
                age: 20
            },
            username:'xiaohong'
        });
    }

    abc = () => {
        console.log(34);
    }

    render() {
        return (
            <div>
                <button onClick={this.changeAge.bind(this)}>改变年龄</button>
                <br />
                <button onClick={this.changeName.bind(this)}>改变名字</button>
                {/* <button onClick={this.abc.bind(this)}>abc</button> */}
                <br />
                {/* 我的名字叫{this.state.data.name+'  '+this.state.username} */}
                我的名字叫{this.state.data.name}
                <br />
                我的年龄叫{this.state.data.age}
            </div>
        );
    }
}
