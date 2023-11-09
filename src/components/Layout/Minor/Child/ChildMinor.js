import React from "react";
import "./ChildMinor.css";

const ChildMinor = () => {
  let minorCard = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/avatar_g.jpg",
      name: "My Name",
      para: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    },
  ];
  return (
    <>
      {minorCard.map((value) => {
        return (
          <div className="minor_card" key={value.id}>
            <div className="child_minor_img">
              <img src={value.image} alt="error" />
            </div>
            <div className="minor_card_content">
              <h3>{value.name}</h3>
              <p>{value.para}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChildMinor;
