// 状态树跨级通信
import React from 'react';

//定义一个全局的context
const GlobalContext = React.createContext();

export default class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "来自老祖宗的问候",
            isCreated: false
        };
    }
    render() {
        return (
            //提供一个生产者
            <GlobalContext.Provider value={
                {
                    //传递给消费者的数据
                    msg: this.state.msg,
                    //传递给消费者,一个函数,提供改变生产者内部的一个参数
                    onChangeShow: (text) => {
                        this.setState({
                            msg: text
                        });
                    },
                }
            }>
                <div>
                    <h1>我是父组件,我提供数据给子孙吗:{this.state.msg}</h1>
                    <Son></Son>
                    <Hello></Hello>
                </div>
            </GlobalContext.Provider>
        );
    }
}

class Son extends React.Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    context => (
                        <div>
                            <h1>我是儿子组件,我要消费父亲的数据,{context.msg}</h1>
                            <GrandSon></GrandSon>
                        </div>
                    )

                }
            </GlobalContext.Consumer>
        );
    }
}

class GrandSon extends React.Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    context => (
                        <div>
                            <h1>我是孙子组件,我要消费祖宗的数据,{context.msg}</h1>
                            <button onClick={() => {
                                context.onChangeShow('我要改变我祖宗的规矩');
                            }
                            }>我要改变我祖宗的规矩</button>
                        </div>
                    )
                }

            </GlobalContext.Consumer>

        );
    }
}


class Hello extends React.Component {
    render() {
        console.log(this.context);
        return (
            <div>

            </div>
        );
    }
}
Hello.contextType = GlobalContext;