import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    console.log("Making Get Request");
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    );
    const data = await response.json();
    setPosts(data['value']);
  };

  useEffect(() => {
    console.log("Updating request")
    fetchPost();
  }, []);
  return (
    <div className="App">
    <p> {posts} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}