import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  const res = await fetch(
    "https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1"
  );
  const json = await res.json();
  return json;
};

function FlightSearch() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  var [FData, setFData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setFData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSearch = () => {
    let filteredData = FData.filter(
      (ele) =>
        ele.source == source.toLowerCase() &&
        ele.destination == destination.toLowerCase()
    );
    setFilteredData(filteredData);
  };
  return (
    <div className="row">
      <br /> <br /> <br />
      <div></div>
      <div className="col-md-6 offset-md-4">
        <section>
          <h4 className="heading">Flight Search</h4>
          <br />
          <input
            onChange={(e) => setSource(e.target.value)}
            className="mr-30"
            type="text"
            data-testid="source-input"
            placeholder="Source"
          />
          <br /> <br />
          <input
            onChange={(e) => setDestination(e.target.value)}
            className="mr-30"
            type="text"
            data-testid="destination-input"
            placeholder="Destination"
          />
          <br /> <br />
          <button
            onClick={handleSearch}
            data-testid="search-button"
            className="btn btn-primary search"
          >
            Search
          </button>
        </section>
      </div>
      {filteredData.length && source && destination ? (
        <SearchResults flightdata={filteredData} />
      ) : (
        <section className="col-md-6 offset-md-4">
          <div data-testid="no-flights" className="">
            No Flights Found
          </div>
        </section>
      )}
    </div>
  );
}

export default FlightSearch;