import { Component } from "react";

class Response extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id="errors">
                {this.props.errors.map((error, i) => <p id={`error-${i+1}`} style={{color:this.props.color}}>{error}</p>)}
            </div>
        );
    }
}

export default Response