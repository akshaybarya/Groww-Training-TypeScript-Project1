import React from "react";
import "./App.css";
import SongDetail from "./songdetail/SongDetail";
import SongList from "./songlist/SongList";

const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <div className="main-container">
        <SongList />
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
