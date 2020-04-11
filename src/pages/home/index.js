import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const Home = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [toResultPage, setToResultPage] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    setToResultPage(true);
  }

  return (
    <>
      {toResultPage ? <Redirect push to={`/result?search=${searchQuery}`} /> : null}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Please, enter product name..."
        />
        <input type="submit" value="Search" />
      </form>
    </>
  )
}

export default Home;