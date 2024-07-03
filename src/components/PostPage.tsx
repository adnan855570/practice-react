import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonRep = await resp.json();
    setPosts(jsonRep);
    console.log({ jsonRep });
  };


useEffect(() => {
    //component mount
getPosts()
}, [])

  return (
    <section>
      <div>PostPage</div>
      {posts.map((postItem) => {
        return (
          <div className="my-10">
            <h2 className="text-xl font-bold">{postItem.title}</h2>
            <p>{postItem.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostPage;
