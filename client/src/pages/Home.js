import React, { useState, useRef } from 'react';
import Book from "../components/Book";
import { Container, Row, Col } from '../components/Grid'
import { FormBtn } from "../components/Form";
import API from '../utils/API';

function Home() {
  const [books, setBooks] = useState([]);

  const findBooks = (query) => {
    API.getBooks(query)
    .then(res => {
      const bookData = res.data.items;
      const dataArr = [];

      for (let item of bookData) {
        dataArr.push(item);
      }

      setBooks(dataArr);
    })
    .catch(err => console.log(err));
  };
  
  const inputRef = useRef();

  const handleFormSubmit = e => {
    e.preventDefault();
    findBooks(inputRef.current.value);
    inputRef.current.value = "";
  };
  
  const handleBookSave = book => {
    API.saveBook({ 
      bookId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink
    }).then(() => handleModal());    
  };

  const handleModal = () => {
    alert('Book Saved!')
  }

  return (
    <div>
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
              <form className="position-relative form-group" onSubmit={handleFormSubmit}>
                <input className="form-control mt-3 w-50 position-absolute top-50 start-50 translate-middle"
                  ref={inputRef}
                />
              </form>
            </div>
          </Col>
          <Row myclass="position-relative mb-3 mt-0 ms-0 me-0 ps-0 pe-0">
            <Col size="12">
              <FormBtn onClick={handleFormSubmit} myclass="btn-success position-absolute top-50 start-50 translate-middle">
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
              {books.map(book => (
                <Book
                  key={book.id} 
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  link={book.volumeInfo.previewLink}
                  onClick={function(){handleBookSave(book)}}
                  btnColor={"btn-success"}
                  btnName={"Save"}
                />
              ))} 
            </div>         
          ) : (
            <h6 className="text-center mt-3 mb-3">No Results to Display</h6>
          )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;