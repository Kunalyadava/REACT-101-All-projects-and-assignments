import { useReducer } from "react";
import "./App.css";

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [reducerState, dispatch] = useReducer();

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B20 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
          <div data-tesid="loading">Loading...</div>

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          <div data-testid="error" style={{ color: "red" }}>
            Error in fetching details
          </div>

          {/* Map through the products data, here, by passing the data to the ProductCards component */}
        </div>
      </div>
    </div>
  );
}

export default App;
