import React from "react";
import "./Header.css";

const Header = ({title}) => {
  return (
    <>
      <div className="heading">
        <h1 className="title">{title}</h1>
      </div>
    </>
  );
};

export default Header;
