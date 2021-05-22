import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import { Container, Row, Col } from '../components/Grid'
import { Input, FormBtn, TextArea } from "../components/Form";
import API from '../utils/API';
const objectPath = require("object-path");

function Search() {
  // Setting our component's initial state
  // const [itemInput, setItemInput] = useState('');
  const [books, setBooks] = useState([]);
  
  // Load all books and store them with setBooks
  // useEffect(() => {
  //   findBooks()
  // }, [])
  
  // Loads all books and sets them to books
  const findBooks = (query) => {
    API.getBooks(query)
    .then(res => {
      // setBooks(res.data)
      const bookData = res.data.items;
      const dataArr = [];

      for (let item of bookData) {
        dataArr.push(objectPath.get(item, "volumeInfo"));
      }
      setBooks(dataArr)
      console.log(dataArr);
      
    })
    .catch(err => console.log(err));
  };
  
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    findBooks(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <Nav />
      <Container>
        <Row myclass="border border-secondary border-2 rounded mt-5">
          <Col size="12">
            <h3 className="text-center mt-2">Google Books Search</h3>
            <h5 className="text-center mb-5">Search for and Save Books of Interest</h5>
          </Col>
        </Row>
        <Row myclass="my-form border border-secondary border-2 rounded mt-5">
          <Col size="12">
            <div>
              <h3 className="text-center mt-3 mb-3">Book Search</h3>
              <form className="position-relative form-group" onSubmit={handleSubmit}>
                <input className="form-control mt-3 w-50 position-absolute top-50 start-50 translate-middle"
                  ref={inputRef}
                />
              </form>
            </div>
          </Col>
        <Row myclass="position-relative mb-3 mt-0 ms-0 me-0 ps-0 pe-0">
          <Col size="12">
            <FormBtn onClick={handleSubmit} myclass="position-absolute top-50 start-50 translate-middle">
              Search
            </FormBtn>
          </Col>
        </Row>
        </Row>
        <Row myclass="border border-secondary border-2 rounded mt-5 mb-5 pb-3">
          <Col size="12">
            <h3 className="text-center mt-3 mb-3">Results</h3>
            {books.length ? (
              <div>
                {books.map(book => {
                
                  return (
                    <div className="border border-secondary border-2 rounded mt-3 p-2">
                      <h5>{book.title}</h5>
                      <p className="mb-3">Written By: {book.authors}</p>
                      <hr/>
                      <h5>Description:</h5>
                      <p>{book.description}</p>
                    </div>
                    
                  );
                })}
              </div>
            ) : (
              <h6>No Results to Display</h6>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;