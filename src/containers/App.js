import React from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollable from "../components/Scrollable";
import CountButton from "../components/CountButton";
import "./App.css";

const App = () => {
  return (
    <div className="tc">
      <h1 className="page-title f1">RoboFriends</h1>
      <CountButton />
      <SearchBox />
      <Scrollable>
        <CardList />
      </Scrollable>
    </div>
  );
};

export default App;
