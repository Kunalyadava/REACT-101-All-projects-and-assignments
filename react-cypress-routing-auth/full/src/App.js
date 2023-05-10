import {AllRoutes} from "./Routes/AllRoutes";
import "./App.css";
import { Navbar } from "./Routes/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}