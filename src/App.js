import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Quote from './components/Quote';

function App() {

  //state
  const [ quote, setQuote ] = useState({});

  //query API 
  const queryAPI = async () => {
    const response = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    
    //add API response to state
    setQuote(response.data[0]);

  }

  //call query API func
  useEffect( 
    () => {
      queryAPI();
    }, []
  );

  const handleClick = () => {
    queryAPI();
  }

  return (
    <div className="container">
      <Quote 
        quote={quote}
      />

      <button
        onClick={handleClick}
      >Generate new Quote</button>
    </div>
  );
}

export default App;
