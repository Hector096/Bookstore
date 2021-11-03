import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Book from './Book';
import './App.css';

export default function BookContainer() {
  const books = [{ title: 'Rich Dad and Poor Dad', id: '2', author: 'Robert' }, { title: 'Zero to One', id: '22', author: 'Robert' }, { title: 'Highly Effective People', id: '3', author: 'Robert' }, { title: 'Highly Effective People', id: '5', author: 'Robert' }];

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
      <Form className="d-lg-flex ms-5">
        <Col className="m-3"><Form.Control type="text" placeholder="Book title" className="p-3 me-3" /></Col>

        <Col className="m-3"><Form.Control type="text" placeholder="Author" className="p-3 me-3" /></Col>
        <Col className="m-3"><Form.Control type="text" placeholder="Category" className="p-3 me-3" /></Col>
        <Col className="m-auto">
          <Button variant="primary" type="submit">
            Add book
          </Button>
        </Col>
      </Form>
    </>
  );
}
