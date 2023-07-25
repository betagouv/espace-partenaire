import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [hello, setHello] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3000/hello').then((response) => {
      setHello(response.data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hello}
        </a>
      </header>
    </div>
  );
}

export default App;
