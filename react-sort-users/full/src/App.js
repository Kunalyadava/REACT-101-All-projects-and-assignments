import "./App.css";
import data from "./db.json";
import UserDetails from "./components/UserDetails";
import { useState } from "react";

function App() {
  let [userData, setUserData] = useState(data);
  const handleSortAsc = () => {
    userData.sort((a, b) =>
      a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
    );
    setUserData([...userData]);
  };
  const handleSortDesc = () => {
    userData.sort((a, b) =>
      a.first_name > b.first_name ? -1 : b.first_name > a.first_name ? 1 : 0
    );
    setUserData([...userData]);
  };

  return (
    <div className="App" data-testid="app">
      <button onClick={handleSortAsc} data-testid="sort-asc-btn">
        Sort by Asc
      </button>
      <button onClick={handleSortDesc} data-testid="sort-desc-btn">
        Sort by Desc
      </button>
      {userData.map((item, index) => {
        return <UserDetails {...item} key={item.id} />;
      })}
    </div>
  );
}

export default App;