import React, { useEffect, useState } from 'react';
import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        'X-Api-Key': '5JRFQ6w6eGkiarUaRw4wogMbESJE4M17qc6Sfvzi',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  if (error) {
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
        <div className="Quote-loader" />
      </div>
    );
  }
  return (
    <div className="Quote-container">
      <p>
        &quot;
        {quote}
        &quot;
      </p>
      <p className="Quote-author">{author}</p>
    </div>
  );
};

export default Quote;
