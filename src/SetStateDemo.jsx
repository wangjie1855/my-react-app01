import React, { Component } from 'react'

export default class SetStateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        };
    }

    onChange = () => {
        let num = this.state.count + 1;
        this.setState({
            count: num
        }, () =>{
            console.log(this.state.count); //这里就是同步获取了
        });
        // console.log(this.state.count); //这里是异步，慢一个数显示
    }

    render() {
        return (
            <div>
                <h3>setState是同步还是异步</h3>
                <h3>{this.state.count}</h3>
                <button onClick={this.onChange}>on click change</button>
            </div>
        )
    }
}
