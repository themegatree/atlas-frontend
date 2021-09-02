import React, {Component} from 'react';

class Entry extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      id: this.props.id,
      check: false,
      errors: this.props.data.errors.split(","),
      date: new Date(this.props.data.createdAt).toString().substr(0,24)
    }
  }

changeCond(){
  if(this.state.check){
    this.setState({check: false})
  }
  else{
    this.setState({check: true})
  }
}

  render(){
    return(
      <p id={`Text-${this.state.id}`}  style={{color: this.state.data.status === "Success" ? 'green' : 'red'}}>{this.state.data.status} {this.state.data.uploadType} {this.state.date} <button id={`Button-${this.state.id}`} onClick={() => this.changeCond()}>Check</button><ul id={`Text-${this.state.id}`} style={{fontSize: this.state.check ? 12 : 0}}>{this.state.errors.map(error => <li>{error}</li>)}</ul></p>
    )
  }

}

export default Entry;
