import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    );
    const data = await response.json();
    console.log(data['value']);
    setPosts(data['value']);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
    <p> {posts} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}