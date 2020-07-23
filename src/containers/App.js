import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeSearchText, fetchRobots } from "../redux/actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollable from "../components/Scrollable";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = ({ searchText, changeSearchText, robots, fetchRobots }) => {
  //fetch the robots when the component is mounted
  useEffect(() => {
    fetchRobots();
  }, [fetchRobots]);

  const renderFilteredRobots = () => {
    if (robots.isPending) {
      return <h2>Loading...</h2>;
    }

    if (robots.error) {
      return <h2>{robots.error.message}</h2>;
    }

    const filteredRobots = robots.data.filter((robot) =>
      robot.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <ErrorBoundary>
        <CardList data={filteredRobots} />
      </ErrorBoundary>
    );
  };

  return (
    <div className="tc">
      <h1 className="page-title f1">RoboFriends</h1>
      <SearchBox onChange={(text) => changeSearchText(text)} />
      <Scrollable>{renderFilteredRobots()}</Scrollable>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    searchText: state.searchText,
    robots: state.robots,
  };
};

export default connect(mapStateToProps, { changeSearchText, fetchRobots })(App);
