import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
      {loading && <div>LOADING</div>}
      {data?.map((item) => (
        <div style={{ marginBottom: "20px" }} key={item.id}>
          <div>{item.name}</div>
          <Link to={`/productDetails/${item.id}`}>See More</Link>
        </div>
      ))}

      </div>
    </div>
  )
}
