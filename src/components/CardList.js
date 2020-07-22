import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return data.map(({ id, name, email }) => (
    <Card key={id} id={id} name={name} email={email} />
  ));
};

export default CardList;
