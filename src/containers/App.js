import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollable from "../components/Scrollable";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = (props) => {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState("");

  //fetch the robots
  useEffect(() => {
    const fetchRobots = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setRobots(data);
    };
    fetchRobots();
  }, []);

  const renderFilteredRobots = () => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <ErrorBoundary>
        <CardList data={filteredRobots} />
      </ErrorBoundary>
    );
  };

  const onSearchBoxChange = (newValue) => {
    setSearchText(newValue);
  };

  return (
    <div className="tc">
      <h1 className="page-title f1">RoboFriends</h1>
      <SearchBox onSearchBoxChange={onSearchBoxChange} />
      <Scrollable>{renderFilteredRobots()}</Scrollable>
    </div>
  );
};

export default App;
