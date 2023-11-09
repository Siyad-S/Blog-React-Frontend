import React from "react";
import "./PostMinor.css";

const PostMinor = () => {
  let popularPosts = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/workshop.jpg",
      name: "Lorem",
      description: "Sed mattis nunc",
    },
    {
      id: 2,
      image: "https://www.w3schools.com/w3images/gondol.jpg",
      name: "Ipsum",
      description: "Praes tinci sed",
    },
    {
      id: 3,
      image: "https://www.w3schools.com/w3images/skies.jpg",
      name: "Dorum",
      description: "Ultricies congue",
    },
    {
      id: 4,
      image: "https://www.w3schools.com/w3images/rock.jpg",
      name: "Mingsum",
      description: "Lorem ipsum dipsum",
    },
  ];
  return (
    <>
      {popularPosts.map((value) => {
        return (
          <div className="post_container" key={value.id}>
            <div className="post_image">
              <img src={value.image} alt="error" />
            </div>
            <div className="post_contents">
                <h5>{value.name}</h5>
                <h6>{value.description}</h6>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostMinor;
