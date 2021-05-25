import axios from "axios";

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&key=AIzaSyDIgzatOnslxJ_o79ySgfXYrKrbOGahZK0`);
  },
  // Gets the book with the given id
  getSavedBook: function() {
    return axios.get("/api/book/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("api/book", bookData);
  }
};