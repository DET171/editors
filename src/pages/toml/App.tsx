import { Header, TextArea, Form } from 'semantic-ui-react'
import React, { Component } from 'react';
import './App.css';
import TOML from '@iarna/toml';

class App extends Component <{}, { JSON: any }> {
  constructor(props: any) {
    super(props);
    this.state = { JSON };
    this.TOMLonChange = this.TOMLonChange.bind(this);
  }

  // converts csv to JSON
  TOMLonChange (event: { target: { value: string }}): void {
    const result = TOML.parse(event.target.value);
    const JSON = result;
    this.setState({ JSON: JSON });
  }

  render(): JSX.Element {
    return (  
      <>
        <Header as='h1'>TOML to JSON</Header>
        <Form>
          <TextArea placeholder='Enter TOML here' style={{ minHeight: 200 }} onChange={this.TOMLonChange}></TextArea>
        </Form>
        <Header as='h3'>JSON</Header>
        <pre><code className="language-json">{JSON.stringify(this.state.JSON)}</code></pre>
      </>
    )
  }
}

export default App;
