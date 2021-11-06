import React, { useState, useEffect } from 'react';
import {
  Form, Button, Col, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addBook, fetchBooks } from '../redux/books/books';
import './App.css';

export default function BookContainer() {
  const [value, setValue] = useState({
    title: '',
    category: '',
  });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(value));
    setValue({ title: '', category: '' });
  };
  const handleFormInput = (e) => {
    const inputName = e.target.name;
    setValue({ ...value, [inputName]: e.target.value });
  };

  return (
    <>
      {books.loading !== true ? (
        <>
          <div className="book-container">
            {books.books === undefined || books.books.length === 0 ? (
              <h2 className="text-center fw-bold mt-5">No Books Found..</h2>
            ) : (
              books.books.map((item) => (
                <Book data={item} key={item.id} />
              ))

            )}
          </div>
          <hr className="container" />
          <div className="container">
            <h2 className="mt-2 fw-bold">Add Book</h2>
            <Form className="d-lg-flex mt-4" onSubmit={addNewBook}>
              <Col className="me-3 col-6"><Form.Control onChange={handleFormInput} value={value.title} type="text" placeholder="Book title" name="title" required /></Col>
              <Col className="me-3 col-4"><Form.Control onChange={handleFormInput} value={value.category} type="text" placeholder="Category" name="category" required /></Col>
              <Col className="m-auto">
                <Button variant="primary" type="submit" className="ps-5 pe-5">
                  Add book
                </Button>
              </Col>
            </Form>
          </div>
        </>
      )
        : (<Spinner animation="grow" className="spinner" size="lg" />)}
    </>
  );
}
