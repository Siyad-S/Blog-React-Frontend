import React from "react";
import "./MinorCard.css";
import ChildMinor from "./Child/ChildMinor";
import Postcards from "./Child/PostChild/PostMinor";
import Tags from "./Child/TagChild/Tags";

function MinorCard() {
  return (
    <div className="minor_container">
      <ChildMinor />
      <div className="post_div">
        <h3>Popular Posts</h3>
        <Postcards />
      </div>
      <div className="post_div tag_div">
        <h3>Tags</h3>
        <div className="tag_app_div">
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default MinorCard;
