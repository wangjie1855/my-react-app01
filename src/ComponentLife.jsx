import React, { Component } from 'react'

export default class ComponentLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillReceiveProps = () =>{
        console.log("componentWillReceiveProps")
    }

    componentWillUpdate = () =>{
        console.log("componentWillUpdate")
    }

    componentDidUpdate = () =>{
        console.log("componentDidUpdate")
    }
    
    componentWillMount = () => {
        console.log("componentWillMount")
    }

    componentDidMount = () => {
        console.log("componentDidMount")
    }

    shouldComponentUpdate = () => {
        console.log("shouldComponentUpdate")
        return true;
    }

    upCount = () =>{
        let num = this.state.count + 1;
        this.setState({
            count: num
        });
    }

    //子传父，调用父级的方法,有点事可以传参
    onClickChange = () =>{
        this.props.onchanges('woshi zi shuju');
    }

    render() {

        return (
            <div>
                <h3>Component生命周期</h3>
                <h4>{this.state.count}</h4>
                <h4>{this.props.title}</h4>
                <button onClick = {this.upCount}>up</button>    
                <button onClick ={this.onClickChange}>子改变title</button>            
            </div>
        )
    }
}
