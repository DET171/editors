import { Header, TextArea, Form } from 'semantic-ui-react'
import React, { Component } from 'react';
import './App.css';


class App extends Component <{}, { JSON: any }> {
  constructor(props: any) {
    super(props);
    this.state = { JSON };
    this.CSVonChange = this.CSVonChange.bind(this);
  }

  // converts csv to JSON
  CSVonChange (event: { target: { value: string }}): void {
    const csv: string = event.target.value;
    const lines: string[] = csv.split("\n");

    const result: {}[] = [];

    const headers = lines[0].split(",");

    for(let i = 1; i < lines.length; i++){

      const obj: {} = {};
      const currentline = lines[i].split(",", undefined);

      for(let j = 0; j < headers.length; j++){
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    const JSON = result;
    this.setState({ JSON: JSON });
  }

  render(): JSX.Element {
    return (  
      <>
        <Header as='h1'>CSV to JSON</Header>
        <Form>
          <TextArea placeholder='Enter CSV here' style={{ minHeight: 200 }} onChange={this.CSVonChange}></TextArea>
        </Form>
        <Header as='h3'>JSON</Header>
        <pre><code className="language-json">{JSON.stringify(this.state.JSON)}</code></pre>
      </>
    )
  }
}

export default App;
