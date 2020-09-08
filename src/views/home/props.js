
import React from 'react';
import PropTypes from 'prop-types'; // 包含数据类型验证方法

// 函数式组件,props就是从外部传入的参数
function Hello(props) {
    return <p>hello {props.name}</p>;
}

class World extends React.Component {
    //构造器接收
    constructor(props) {
        //继承属性
        super(props);
    }

    static propTypes = {
        name: PropTypes.string
    }

    render() {
        return (
            <div>
                类定义组件:{this.props.name}
            </div>
        );
    }

};

// World.propTypes = {
//     name: PropTypes.string
// };
export default World;