import React, { useState, useEffect } from 'react';
import Book from "../components/Book";
import { Container, Row, Col } from '../components/Grid'
import API from '../utils/API';

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getSavedBook();
  }, [])

  const getSavedBook = () => {
    API.getSavedBook()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }
    
  const handleBookRemove = id => {
    API.deleteBook(id)
    .then(res => getSavedBook())
    .catch(err => console.log(err));
  };

  return (
    <div>
      <Container>
        <Row myclass="border border-secondary border-2 rounded mt-5">
          <Col size="12">
            <h3 className="text-center mt-2">Google Books Search</h3>
            <h5 className="text-center mb-5">Search for and Save Books of Interest</h5>
          </Col>
        </Row>
        <Row myclass="border border-secondary border-2 rounded mt-5 mb-5 pb-3">
          <Col size="12">
          <h3 className="text-center mt-3 mb-3">Saved Books</h3>
          {books.length ? (
            <div>
              {books.map(book => (
                <Book
                  key={book.bookId} 
                  title={book.title}
                  author={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  onClick={function(){handleBookRemove(book._id)}}
                  btnColor={"btn-danger"}
                  btnName={"Remove"}
                />
              ))} 
            </div>         
          ) : (
            <h6 className="text-center mt-3 mb-3">No Saved Books</h6>
          )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;