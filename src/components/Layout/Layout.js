import React from "react";
import "../Layout/Layout.css";
import Header from "../Common/Header/Header";
import MajorCard from "../Layout/Major/MajorCard";
import MinorCard from "../Layout/Minor/MinorCard";
import Footer from "../Layout/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="body">
        <div className="container">
          <Header title={"MY BLOG"} />
          <div className="sub_title">
            <p>Welcome to the blog of</p>
            <p className="author">Unknown</p>
          </div>
          <div className="card_containers">
            <div className="major_div">
              <MajorCard />
            </div>
            <div>
              <MinorCard />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
