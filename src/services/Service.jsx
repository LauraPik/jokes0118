import React, { useState, useEffect } from 'react';

export const Service = ({ querry, joke }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${querry}`)
      .then(response => response.json())
      .then(data => 
        setJokes(data.result)
      );
  }, []);

  

}