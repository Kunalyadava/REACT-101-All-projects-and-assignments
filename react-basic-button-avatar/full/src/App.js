import Button from "./Components/Button";
import Avatar from "./Components/Avatar";

let userDetails = {
  image: "https://via.placeholder.com/140x100",
  caption: "Masai"
};
export default function App() {
  return (
    <div className="App">
      <Button />
      <Avatar {...userDetails} />
    </div>
  );
}