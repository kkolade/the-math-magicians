import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/vi/quotes';

  useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const fetchQuote = await fetch(url, {
          method: 'GET',
          header: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'tgGQLF0ayPX9ZzYdnazDEA==ZUlyDiE4HJM8YHuy',
          },
        });
        const fetchedQuote = fetchQuote.json();
        console.log(fetchedQuote);
        setQuote(fetchedQuote);
      } catch (error) {
        setHasError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    getQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) {
    return (
      <div className="Quotes-container">
        <span className="error">Error getting the quotes!!!</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="Quotes-container">
        <span>Loading the quotes...</span>
      </div>
    );
  }
  return (
    <div className="Quotes-container">
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
