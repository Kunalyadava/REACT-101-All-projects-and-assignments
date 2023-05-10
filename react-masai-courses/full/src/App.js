import Courses from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

export default function App() {
  let user = {
    avatar: "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
    name: "Chrisse",
    address: "4018 Sachs Trail",
    followers: 66868,
    posts: 1841,
  };
  return (
    <div>
      <Title />
      <UserCard {...user} />
      <Courses />
    </div>
  );
}