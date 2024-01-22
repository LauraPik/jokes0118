import React from 'react';
import { useGlobalContext } from '../../context/TaskContext';

const Search = (props) => {
  const { jokes, fetchJokes } = useGlobalContext();

  const handleFetch = async () => {
    await fetchJokes();
    console.log(jokes)

  };

  return (
    <div>
      {jokes.map((joke, i) => (
        <p key={i}>{joke.joke}</p>
      ))}
      <button onClick={handleFetch}>Fetch jokes</button>
    </div>
  );

};
  


export default Search;