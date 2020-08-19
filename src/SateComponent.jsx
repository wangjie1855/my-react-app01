import React, { Component } from 'react'

export default class SateComponent extends Component {
    /**
     * 组件中的状态
     */

    constructor(props) {
        super(props);
        //定义
        this.state = {
            count: 100,
            myText: "tttt",
            flag: true
        }
    }

    addCount() {
        let num = this.state.count + 1;
        this.setState({
            count: num
        })
    }

    cutCount(){
        let num = this.state.count - 1;
        this.setState({
            count: num
        })
    }

    clickHandler = () =>{
        console.log(this)
    }

    render() {
        let showMsg = this.state.flag? "我是正确的" : "我是错误的";
        return (
            <div>
                <h3>组件的State</h3>
                <p>{this.state.count}</p>
                <button onClick={this.addCount.bind(this)}>增加</button>
                {/**
                你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
                如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
                默认的this指向的是全局，全局中没有你定义在组建里面的函数。bind后的this指向的是上下文，也就是这个组件，这个组件才有你所需要的方法
                 */}
                <button onClick={this.cutCount.bind(this)}>减少</button>
                <button onClick={this.clickHandler}>关于this</button>


                <h3>{showMsg}</h3>
                <button onClick={() => {this.setState({flag: false})}}>改变flag</button>
            </div>
        )
    }
}
