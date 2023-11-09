import React from "react";
import "../AdminPanel/Admin.css";
import Form from "./Form/Form";
import Header from "../Common/Header/Header";

const Admin = () => {
    return (
        <div className="adminBody">
            <div className="container">
                <Header title={"ADMIN PANEL"}/>
                <Form/>

            </div>
        </div>
    );
};

export default Admin;

