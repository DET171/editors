import './App.css';
import { Header, Form, TextArea } from 'semantic-ui-react'
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import React, { Component } from 'react';

const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      }
      catch (_unused) {}
    }
    return ''; // use external default escaping
  }
});

class App extends Component <{}, { html: string }> {
  private result: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.state = { html: '' }
    this.result = React.createRef();
  }

  renderHtml = (event: { target: { value: string }}): void => {
    const html = md.render(event.target.value);
    this.setState({ html: html });
    if(this.result.current) this.result.current.innerHTML = html;
    hljs.highlightAll();
  };

  render(): JSX.Element {
    return (
      <>
        <Header as='h1'>Markdown</Header>
        <Header as='h3'>Enter value : </Header>
        <Form>
          <TextArea
          name="textValue"
          onChange={this.renderHtml}
          ></TextArea>
        </Form>
        { !!this.state.html && 
          <><Header as='h3'>Result</Header>
          <div ref={this.result}></div>
          <Header as='h3'>Raw HTML</Header>
          <div>
           <pre>
             <code className="language-html">
               { this.state.html }
             </code>
           </pre>
         </div></>
        }
      </>
    );
  }
}

export default App;
