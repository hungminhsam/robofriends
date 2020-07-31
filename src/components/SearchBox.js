import React from "react";
import { connect } from "react-redux";
import { changeSearchText } from "../redux/actions";

const SearchBox = ({ searchText, changeSearchText }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b-green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        value={searchText}
        onChange={(e) => changeSearchText(e.target.value.trim())}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { searchText: state.searchText };
};

export default connect(mapStateToProps, { changeSearchText })(SearchBox);
