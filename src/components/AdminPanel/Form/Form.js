import React, {useState} from "react";
import "../Form/Form.css";
import axios from "axios";
import PreviewCard from "../Preview/PreviewCard";

const Form = () => {
    const data = {
        image: "",
        title: "",
        subTitle: "",
        date: "",
        description: ""
    };
    const [inputData, setdata] = useState(data);

    const handleData = (e) => {
        setdata({
            ...inputData,
            [e.target.name]: e.target.value
        });
    };
    const submitCardData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/api", inputData).then((Response) => {
            console.log(Response);
        });
    };
    return (
        <div className="admin_body">
            <div className="form_div">
                <form>
                    <input className="input" type="url" placeholder="Image Url" name="image"
                        onChange={handleData}
                        value={
                            inputData.image
                        }/>
                    <input className="input" type="text" placeholder="Blog Title" name="title"
                        onChange={handleData}
                        value={
                            inputData.title
                        }/>
                    <input className="input" type="text" placeholder="Sub Title" name="sub_title"
                        onChange={handleData}
                        value={
                            inputData.sub_title
                        }/>
                    <textarea className="text_field" type="text" placeholder="Enter content" name="description"
                        onChange={handleData}
                        value={
                            inputData.description
                        }/>

                    <button className="card_create_btn" type="button"
                        onClick={submitCardData}>
                        Create Card
                    </button>
                </form>
            </div>
            <div className="preview_div">
                <PreviewCard data={inputData}/>
            </div>
        </div>
    );
};

export default Form;

