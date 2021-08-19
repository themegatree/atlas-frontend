import { Component } from "react";

class Response extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.errors.map(error => <p style={{color:this.props.color}}>{error}</p>)}
            </div>
        );
    }
}

export default Response