import React, { useState, useEffect } from 'react';

export default function Hooks(props) {
    //声明一个count变量的state,初始值为数字类型20
    let [count, setCount] = useState(20);
    //声明一个msg变量的state,初始值为字符串的hello hook
    let [msg, setMsg] = useState('hello hook');
    //声明一个list变量的state,初始值为数组类型
    let [list, setList] = useState([]);

    //let [rows] = props;

    var timer = null;

    //使用useState返回的更新函数
    function Click() {
        setCount(count + 1);
        setMsg(msg + "world");
    };

    console.log(count);
    console.log(msg);
    console.log(list.length);

    useEffect(() => {
        document.title = "我的";
    });

    useEffect(() => {
        // timer = setInterval(() => {
        //     setCount(count + 1);
        // }, 1000);

        // return () => {
        //     clearInterval(timer);
        // };

    });

    return (
        <div>
            hello hooks
            <h1>{count}</h1>
            <h1>{msg}</h1>
            <button onClick={Click}>按钮</button>


        </div>
    );
}

