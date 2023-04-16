import React, {useState,useEffect} from "react";
import SearchResults from "./SearchResults";
export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  try{
    const data= await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`).then((res)=>res.json())
    return data;  
  }catch(err){
    console.log(err)
  }
};
function FlightSearch() {
  const[search,setSearch]=useState([])
  const[source,setOrigin]=useState('')
  const[destination,setDestination]=useState('')
  const[istemp,setIsTemp]=useState([])
  useEffect(()=>{
    const newData=fetchData().then((res)=>{
      console.log(res)
      setSearch(res)
    })
  },[])
 
  // on page load fetch the data (useEffect)

  const handleSearch = () => {
    let temp=search.filter((ele)=>ele.destination===destination && ele.source==source);
    setIsTemp(temp)
    // filter the data based on source and destination
  };
  return (
    <div>
      
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" onChange={(e)=>setOrigin(e.target.value)}/>
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" onChange={(e)=>setDestination(e.target.value)} />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
     
      {istemp.length>0?
      <SearchResults istemp={istemp}/>: <div data-testid="no-flights" className="">
            No Flights Found
          </div>}
    </div>
  );
}

export default FlightSearch;
