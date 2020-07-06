import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import headerMain from "./headerMain";
import Post from "./post.js";

function App() {
  const [nasaData, updateData] = useState({});

  useEffect(() => {
    axios

      .get(
        "https://api.nasa.gov/planetary/apod?api_key=jwpKiAy8KMYubiNaE5saLmAgBBSGQF08NUfVuWo7"
      )

      .then((response) => {
        console.log(response.data);
        updateData(response.data);
        console.log(`${nasaData} is the data`);
      })
      .catch((err) => {
        console.log("Return");
      });
  });
  return (
    <div className='App'>
      <headerMain date={nasaData.date} />
      <Post
        title={nasaData.title}
        date={nasaData.date}
        url={nasaData.url}
        desc={nasaData.explanation}
      />
    </div>
  );
}

export default App;
