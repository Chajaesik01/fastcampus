import { render, Component } from "react"

class Title extends Component {
    render() {
        return <h1>{props.children}</h1>
    }
}