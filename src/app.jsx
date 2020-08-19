import React from "react"
// import SetStateDemo from "./SetStateDemo";
import ComponentLife from "./ComponentLife"
// import Home from './Home'
// import MyNav from './MyNav'
// import SateComponent from "./SateComponent";

//用类的形式创建组件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "App的title"
        };
    }

    onchange = (dataa) => {
        console.log(dataa);
        if (dataa) {
            this.setState({ title: dataa });
        } else {
            this.setState({ title: "App的title被改变" });
        }
    }

    onchange2(dataa) {
        console.log(dataa);
        this.setState({ title: "App的title被改变" });
    }

    //渲染函数
    render() {

        // const nav1 = ["首页","视频","音乐"];
        // const nav2 = ["WEB","JAVA","C++"];

        return (
            <div>
                {/* <h1>hello word! Component</h1>
                <Home />
                <MyNav nav = {nav1} title = "路徑導航" />
                <MyNav nav = {nav2} title = "教学导航" /> */}
                {/* <SateComponent /> */}
                <ComponentLife title={this.state.title} onchanges={this.onchange2.bind(this)} />
                <button onClick={this.onchange2.bind(this)}>App改变title</button>
                {/* <SetStateDemo /> */}
            </div>
        )
    }
}

export default App