//高阶组件
import React from 'react';

//------------------------------------------------属性代理-------------------------------------------------
//创建一个高阶组件
//将组件作为参数传递,然后再返回一个新组件
const Hoc = (WrappedComponent) => {
    //作为代理,将组件抛出去,并传递props
    return class Proxy extends React.Component {
        proc = (instance) => {
            instance.sayHello();
            console.log(instance.props.name);
            console.log(instance.state.msg);
        }
        render() {
            // ref是无法当做props传递过去的
            const props = Object.assign({}, this.props, { ref: this.proc });
            return (
                //可以通过ref关键字,来获取传递的组件的实例对象
                <WrappedComponent {...props}></WrappedComponent>
            );
        }
    };
};

//引用高阶组件
// const wrappedHoc = Hoc(Hello);

// export default wrappedHoc;




/*-----------------------------抽象state-----------------------------------*/
//创建一个高阶组件(将组件的状态抽象出来)
const HocState = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            };
        }

        HandleChange = (e) => {
            this.setState({
                value: e.target.value
            });
        }

        render() {
            const newProps = {
                HandleChange: this.HandleChange,
                value: this.state.value
            };
            return (
                <div>
                    <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
                </div>
            );
        }
    };
};


//Input组件
class MyInput extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.HandleChange} />
            </div>
        );
    }
}

//文本域组件
class MyTextArea extends React.Component {
    render() {
        return (
            <div>
                <textarea value={this.props.value} onChange={this.props.HandleChange} cols="30" rows="10" ></textarea>
            </div>
        );
    }
}


const HocInput = HocState(MyInput);
const HocTextArea = HocState(MyTextArea);

class Hello extends React.Component {
    render() {
        return (
            <div>
                <HocInput></HocInput>
                <HocTextArea></HocTextArea>
            </div>
        );
    }
}

//声明一个高阶组件
const HocProps = WrappedComponent => class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { userinfo, baseinfo } = this.props.data;

        return (
            //控制样式
            <div className={this.box}>
                {/* 
                    对包装组件的props过滤,也就是删除 
                    还可以添加props,当然也可以修改
                */}
                <WrappedComponent userinfo={userinfo} isShow={false}></WrappedComponent>
            </div>
        );
    }
};



class World extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>


            </div>
        );
    }
}

const HocProp = HocProps(World);



//------------------------------------------------反向代理-------------------------------------------------


class BaseWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'liuqiao'
        };
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

const IIHoc = WrappedComponent => class extends WrappedComponent {
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        };
    }

    Click = () => {
        //改变原始组件的state
        this.setState({
            name: 'zhangsan'
        });
    }

    render() {
        return (
            <div>
                {/* 读取原组件的state */}
                {this.state.name}
                <button onClick={this.Click}>改变</button>
            </div>
        );
    }
};


const IIHocBase = IIHoc(BaseWorld);

export default class Base extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                userinfo: {
                    name: 'zhangsan',
                    age: 18
                },
                baseinfo: {
                    phone: '1234',
                    address: '深圳'
                }
            }
        };
    }

    render() {
        return (
            <div>
                <BaseWorld></BaseWorld>
                <IIHocBase></IIHocBase>
            </div>
        );
    }
}
