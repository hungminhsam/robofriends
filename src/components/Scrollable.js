import React from "react";

const Scrollable = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px solid grey",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scrollable;
