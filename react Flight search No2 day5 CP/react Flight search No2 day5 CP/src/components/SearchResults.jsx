const SearchResults = (props) => {
  const{istemp}=props
      return (
          <table >
            {/* add columnsheadings */}
            <thead>
              <tr>
                <th>DEPARTURE</th>
                <th>Duration</th>
                <th>ARRIVAL</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody data-testid="flight-results">
            {istemp.map((item)=>(
          <tr > 
            <td>{item.departure}</td>
            <td>{item.duration}</td>
            <td>{item.arrival}</td>
            <td>{item.price}</td>
          </tr>
            ))}
            </tbody>
          </table>
      );
    
  };
  export default SearchResults;
  