import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

function App() {
  const query = useQuery(['hello'], () => axios.get('http://localhost:3000/hello'));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { query.data }
        </a>
      </header>
    </div>
  );
}

export default App;
