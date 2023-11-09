import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../Preview/Preview.css"

const PreviewCard = ({data}) => {
  return (
    <>
          <div className="preview_card">
            <div className="preview_image">
              <img alt="upload" src={data.image} />
            </div>
            <div className="preview_card_content">
              <h2>{data.title}</h2>
              <div className="sub_title_major_child">
                <h6>{data.sub_title}</h6>
                <span>, {data.date}</span>
              </div>
              <p className="major_card_para">{data.description}</p>
              <div className="card_ending">
                <button className="read_more_btn">
                  <p>READ MORE</p>
                  <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default PreviewCard;
