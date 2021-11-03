import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addBook } from '../redux/books/books';
import './App.css';

export default function BookContainer() {
  const [value, setValue] = useState({
    title: '',
    author: '',
    genre: '',
  });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(value));
    setValue({ title: '', author: '', genre: '' });
  };
  const handleFormInput = (e) => {
    const inputName = e.target.name;
    setValue({ ...value, [inputName]: e.target.value });
  };

  return (
    <>
      <div className="book-container">
        {books === undefined || books.length === 0 ? (
          <h2 className="text-center fw-bold mt-5">No Books Found..</h2>
        ) : (
          books.map((item) => (
            <Book data={item} key={item.id} />
          ))

        )}
      </div>
      <hr />
      <h2 className="ms-5 m-2 ps-2">Add Book</h2>
      <Form className="d-lg-flex ms-5" onSubmit={addNewBook}>
        <Col className="m-3"><Form.Control onChange={handleFormInput} value={value.title} type="text" placeholder="Book title" className="p-3 me-3" name="title" required /></Col>
        <Col className="m-3"><Form.Control onChange={handleFormInput} value={value.author} type="text" placeholder="Author" className="p-3 me-3" name="author" required /></Col>
        <Col className="m-3"><Form.Control onChange={handleFormInput} value={value.genre} type="text" placeholder="Category" className="p-3 me-3" name="genre" required /></Col>
        <Col className="m-auto">
          <Button variant="primary" type="submit">
            Add book
          </Button>
        </Col>
      </Form>
    </>
  );
}
