import React from 'react';
import axios from 'axios';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';


function App() {
  const [hello, setHello] = React.useState('');

  React.useEffect(() => {
    axios.get('http://localhost:3000/welcome').then((response) => {
      setHello(response.data);
    })
  }, [])

  return (
    <div className="App">
        <Highlight
          classes={{
            root: 'fr-m-10v'
          }}>
            {hello}
        </Highlight>
    </div>
  );
}

export default App;
