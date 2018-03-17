import React, { Component } from 'react';
import marked from '../node_modules/marked/marked.min.js';
import logo from './logo.svg';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
let placeholder = "Heading\n==\nSub-heading\n--\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace\n\nShopping list:\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[mfrashad](mfrashad.github.io)*";
let markedPlaceholder = marked(placeholder);

class App extends Component {
  state = {
    value:placeholder,
    markedValue:{__html:markedPlaceholder}
  }

  changeHandler = (e) => {
    this.setState(
      {
        value:e.target.value, 
        markedValue:{__html:marked(e.target.value)}
      });
  } 

  render() {
    return (
      <div>
      <h2 style={{textAlign:'center'}} >Markdown Previewer</h2>
      <div className="row">
        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content">
              <span className="card-title">Markdown Text</span>
              <div className="input-field">
                <textarea style={{height:'400px'}} id="textarea1"  value={this.state.value} onChange={this.changeHandler} data-length="500"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card z-depth-5">
            <div className="card-content ">
              <span className="card-title">Markdown Preview</span>
              <div dangerouslySetInnerHTML={this.state.markedValue}>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
