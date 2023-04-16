import React from "react";
const Post = (prop) => {
  const{post}=prop;
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */}
        {post.title}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
       {post.body}
      </h3>
    </div>
  );
};

export default Post;
