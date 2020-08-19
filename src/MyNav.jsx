import React from "react"

export default class MyNav extends React.Component {
    render() {
        console.log(this.props.nav);

        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                    {/* <li>QQQ</li>
                    <li>QQQ</li>
                    <li>QQQ</li> */}
                </ul>
            </div>
        )
    }

}