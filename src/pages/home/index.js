import React, { useState } from 'react';
import * as api from '../../api';

const Home = (props) => {
  const [items, setItems] = useState([]);

  const searchHandler = () => {
    const preparedItems = [];

    api
      .search('samsung s10e')
      .then(response => {
        response.data.forEach(item => {
          console.log(item);
          preparedItems.push(
            <li>
              price: {item.price} <br />
              openUrl: {item.openUrl} <br />
              productDesc: {item.productDesc} <br />
              productImg: {item.productImg} <br />
              marketLogo: {item.marketLogo} <br />
            </li>
          )
        })
        setItems(preparedItems);
      });
  }

  return (
    <>
      <button onClick={searchHandler}>find phones</button>
      <div>
        <ul>
          {items}
        </ul>
      </div>
    </>
  )
}

export default Home;