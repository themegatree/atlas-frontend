import React, {Component} from "react";
import Entry from './Entry.js'

class History extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedFile: null,
            response:'',
            data: []
        }
    }

    async componentDidMount(){
      await fetch(`${process.env.REACT_APP_API_URL}/api/fileupload/history`,{
          method: "GET"
      })
      .then(response => response.json())
      .then(data => {
        this.setState({data: data.history})
        })
    }

    render() {
        return(
          <section className="page-section portfolio" id="portfolio">
              <div className="container">
                  <h2 id="cohorts-list" className="page-section-heading text-center text-uppercase text-secondary mb-0">File Upload History</h2>
                  <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                      </div>
                    {this.state.data.slice(0).reverse().map((text, index) => <Entry id={index} data={text}/>)}
                  </div>
          </section>
        );
    }
}

export default History
