import React, {useEffect, useState} from "react";
import "./ChildMajor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ChildMajorCards = () => {

  let date = new Date();
  const formattedDate = date.toDateString()

  const [blogCard, setBlogCard] = useState([]);

  const [expandedBlog, setExpandedBlog] = useState(0);

  const handleReadMore = (BlogDescription) => {
    setExpandedBlog(BlogDescription === expandedBlog ? 0: BlogDescription);
  };

  useEffect(() => { 
    axios.get('http://localhost:4000/api')
    .then(response => setBlogCard(response.data))
    .catch(error => console.error("Error on fetching data:",error));
  }, [])


  return (
    <>
      {blogCard.map((value) => {
        
        return (
          <div className="major_card" key={value.id}>
            <div>
              <img className="major_image" alt="error" src={value.image} />
            </div>
            <div className="major_card_content">
              <h2>{value.title}</h2>
              <div className="sub_title_major_child">
                <h6>{value.sub_title}</h6>
                <span>, {formattedDate}</span>
              </div>
              <p className="major_card_para">
              {value.BlogDescription === expandedBlog
                ? value.description
                : value.description.slice(0, 370)}
              </p>
              <div className="card_ending">
                <button className="read_more_btn" onClick={() => handleReadMore(value.BlogDescription)}>
                  <p>
                  {value.BlogDescription === expandedBlog
                    ? " READ LESS"
                    : " READ MORE"}
                  </p>
                  <FontAwesomeIcon icon={faAnglesRight} />
                </button>
                <div className="comment">
                  <p>Comments</p>
                  <p className="comment_count">2</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChildMajorCards;
