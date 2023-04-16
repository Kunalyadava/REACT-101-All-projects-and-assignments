import LoadingIndicator from "./LoadingIndicator";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";

let total;

function Countries() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (page) => {
    setLoading(true);

    try {
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`
      );
      let data = await response.json();
      setState(data);
      setLoading(false);
      total = data.totalPages;
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData(page)
  }, [page])

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {
          /* Countries Card */
          state?.data?.map((el) => (
            <CountriesCard country={el.country} population={el.population} />
          ))
        }
      </div>
      <div>
        {
          <Pagination current={page} onChange= {(check)=>{setPage(check)}} total={total}/>
        }
       
      </div>
    </div>
  );
}
export default Countries;