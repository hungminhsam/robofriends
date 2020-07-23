import React from "react";
// import { connect } from "react-redux";
// import { setSearchField } from "../redux/actions";

const SearchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b-green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={(e) => props.onChange(e.target.value.trim())}
      />
    </div>
  );
};

// export default connect(null, { setSearchField })(SearchBox);
export default SearchBox;
