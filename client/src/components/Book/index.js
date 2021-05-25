import React from "react";
import { FormBtn } from "../Form";
import "./style.css";  
  
function Book({ title, author, description, image, link, onClick, btnColor, btnName }) {
  return (
  <div>
    <div>
      <div className="border border-secondary border-2 rounded mt-3 p-2">
        <div>
          <h5 className="book-title">{title}</h5>
          <button onClick={onClick} className={`my-btn btn ${btnColor}`}>{`${btnName}`}</button>
          <a href={link} rel="noopener noreferrer" target="_blank"><button className="my-btn btn btn-primary">View</button></a>
          <p className="book-author">{author}</p>
        </div>
          <hr/>
        <div className="book-info">
          <div className="book-image">
            <img src={image} alt={title}></img>
          </div>
          <div className="book-desc">
            <h5>Description:</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Book;

