import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/actions";
import Card from "./Card";
import ErrorBoundary from "./ErrorBoundary";

const CardList = ({ fetchRobots, robots, searchText }) => {
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
        {filteredRobots.map(({ id, name, email }) => (
          <Card key={id} id={id} name={name} email={email} />
        ))}
      </ErrorBoundary>
    );
  };

  return renderFilteredRobots();
};

const mapStateToProps = (state, ownProps) => {
  return {
    robots: state.robots,
    searchText: state.searchText,
  };
};
export default connect(mapStateToProps, { fetchRobots })(CardList);
