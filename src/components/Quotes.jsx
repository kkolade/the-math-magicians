import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const fetchQuote = await fetch('https://api.api-ninjas.com/v1/quotes?');
        const fetchedQuote = await fetchQuote.json();
        setQuote(fetchedQuote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    getQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Error getting the quotes!!!</div>;
  if (isLoading) return <div>Loading the quotes...</div>;
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;
