import React, { useEffect, useState } from 'react';
import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState([
    {
      quote: '',
      author: '',
    },
  ]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/vi/quotes';

  useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const fetchQuote = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': '5JRFQ6w6eGkiarUaRw4wogMbESJE4M17qc6Sfvzi',
          },
        });
        const fetchedQuote = fetchQuote.json();
        console.log(fetchQuote);
        console.log(fetchedQuote);
        setQuote(fetchedQuote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    getQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) {
    return (
      <div className="Quote-container Quote-filler">
        <span className="error">Error getting quote!!!</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="Quote-container Quote-filler">
        <span>Loading a quote...</span>
      </div>
    );
  }
  return (
    <div className="Quote-container">
      <p>
        &quot;
        {quote[0].quote}
        &quot;
      </p>
      <p>{quote[0].author}</p>
    </div>
  );
};

export default Quote;
