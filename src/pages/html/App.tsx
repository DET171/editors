import { Header/*, Form, TextArea*/ } from 'semantic-ui-react'
import React, { Component } from 'react';
import AceEditor from "react-ace";
import './App.css';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";

class App extends Component {
  private onInput;
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const iframe: any = document.getElementById('display');
    if (iframe) {
      const display = iframe.contentDocument.body;
      display.innerHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .blue-text {
              color: blue;
              font-family: calibri;
            }
          </style>
        </head>
        <body>
          <p class='blue-text'>Hello World!</p>
        </body>
      </html>
      `;
    }
  }

  onChange(value: string) {
    const iframe: any = document.getElementById('display');
    if (iframe) {
      const display = iframe.contentDocument.body;
      display.innerHTML = value;
    }
  }

  render(): JSX.Element {
    return (
      <>
        <Header as='h1'>HTML Editor</Header>
        <AceEditor
          placeholder="Enter HTML Code here"
          mode="html"
          theme="tomorrow"
          name="editor"
          // onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`
<!DOCTYPE html>
<html>
  <head>
    <style>
      .blue-text {
        color: blue;
        font-family: calibri;
      }
    </style>
  </head>
  <body>
    <p class='blue-text'>Hello World!</p>
  </body>
</html>
          `}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <Header as='h3'>Result</Header>
        <iframe id='display' title='display' frameBorder='0'></iframe>
      </>
    )
  }
}

export default App;
