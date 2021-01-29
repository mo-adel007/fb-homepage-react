import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
