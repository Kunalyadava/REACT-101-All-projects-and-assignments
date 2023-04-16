import "./App.css";
import { useState } from "react";
import Post from "./Components/Post";
const getPost=()=>{
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
    return res.json()
  })
}
function App() {
  const [post, setPost] = useState([]);

  const dataClick = async () => {
   try{
    const post=await getPost();
    setPost(post);
   }catch(err){
    setPost("some error");
   }
  };
  return (
    <div className="App" data-testid="app">
      <button   id="get-posts-btn" onClick={dataClick} >
        GET POSTS
      </button>
      <div id="post-container">
        {post.map((posts)=>{
          return <Post post={posts}></Post>
        })}
        {/*  map through the posts data and pass props to the Posts component */}
      </div>
    </div>
  );
}

export default App;
