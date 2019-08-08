import React from 'react';

const Quote = ({quote}) => {
    return (  
        <div className="quote">
            <h1>{quote.quote}</h1>

            <p>- {quote.author}</p>
        </div>
    );
}
 
export default Quote;