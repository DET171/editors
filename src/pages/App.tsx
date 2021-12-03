import './App.css';
import { Header } from 'semantic-ui-react'

function App(): JSX.Element {
  return (
    <><Header as='h1'>You can try out different editors here:</Header>
      <ul>
        <li><a href='#markdown'>Markdown (using Showdown)</a></li>
      </ul>
    </>
  );
}

export default App;
