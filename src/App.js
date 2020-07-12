import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    html: ""
  }

  onHtmlChange = e => {
    this.setState({
      html: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">HTML Viewer</h3>
        <div className="wrapper">
          <div className="editorContainer">
            <textarea rows={"30"} onChange={this.onHtmlChange} className="editor" />
          </div>
          <div className="viewer">
            <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
