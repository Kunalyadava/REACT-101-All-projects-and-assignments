const ReasultsTable = (props) => {
  const {flightdata } = props;
  
    return (
      <section className="col-md-6 offset-md-4">
        <table className="table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody data-testid="flight-results">{
            flightdata.map((flight,index)=>{
              return <tr className="table-info" key={index}>
              <td>{flight.departure}</td>
              <td>{flight.duration}</td>
              <td>{flight.arrival}</td>
              <td>{flight.price}</td>
            </tr>
            })
          }</tbody>
        </table>
      </section>
    );
  
};
export default ReasultsTable;
