"use client"

import React from "react";

const List = ({ children }) => {
  return (
    <div className="container">
      <div className="countries__list">{children}</div>
    </div>
  );
};

export default List;
