import jsPDF from "jspdf";
import React, { PureComponent } from "react";


class PdfTest extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {}
    }

    createPdf = () => {
        const doc = new jsPDF();
        console.log('createPdf button pressed!')

        doc.html(document.querySelector('#test5'), {
        callback: function (doc) {
            doc.save();
        },
        x: 10,
        y: 10
        });
        // this.render()
    }
    
    render() {
      return(
          <div id = 'test2' class='whatevgggger'>
            <button onClick={this.createPdf} >make wont workkkk PDF</button>

          </div>
      )
    }
  }

export default PdfTest