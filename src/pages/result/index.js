import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from "react-router-dom";
import * as api from '../../api';

const useQuery = (name = null) => {
  const query = new URLSearchParams(useLocation().search);
  return name ? query.get(name) : query; 
}

const Result = (props) => {
  const [items, setItems] = useState([]);
  const searchParamValue = useQuery('search');

  const loadItems = () => {
    const preparedItems = [];

    api
      .search(searchParamValue)
      .then(response => {
        response.data.forEach(item => {
          console.log(item);
          preparedItems.push(
            <div>
              price: {item.price} <br />
              openUrl: {item.openUrl} <br />
              productDesc: {item.productDesc} <br />
              productImg: {item.productImg} <br />
              marketLogo: {item.marketLogo} <br />
            </div>
          )
        })
        setItems(preparedItems);
      });
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      {searchParamValue ? null : <Redirect to='/'/>}
      <div>
        {items.length > 0 ? items : 'Loading...'}
      </div>
    </>
  )
}

export default Result;