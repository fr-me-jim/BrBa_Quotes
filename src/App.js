import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  //state
  const [ quote, setQuote ] = useState({});

  //query API
  useEffect(
    async () => {
      const response = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    }
  );

  return (
    <div className="App">
    </div>
  );
}

export default App;
