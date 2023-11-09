import React from 'react';
import "./Tags.css";

const Tags = () => {
    let tags = [
        { id: 1, title: "Travel"}, 
        { id: 2, title:"New York"}, 
        { id: 3, title:"London"},
        { id: 4, title:"IKEA"},
        { id: 5, title:"NORWAY"},
        { id: 6, title:"DIY"},
        { id: 7, title:"Idea"},
        { id: 8, title:"Baby"},
        { id: 9, title:"Family"},
        { id: 10, title:"News"},
        { id: 11, title:"Clothing"},
        { id: 12, title:"Shopping"},
        { id: 13, title:"Sports"},
        { id: 14, title:"Games"},
    ]
  return (
    <>
    {tags.map((values) => {
        return (
            <div key={values.id}>
                <span className='tag_span'>{values.title}</span>
            </div>
        )
    })}
    </>
  )
}

export default Tags