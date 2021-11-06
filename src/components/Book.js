import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircleProgress } from 'react-gradient-progress';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();
  const { data } = props;
  return (
    <div className="container">
      <Row className="mt-4 border border-2 bg-white">
        <Col className="p-4 ">
          <p className="text-secondary">{data.category}</p>
          <h5 className="fw-bold m-0">{data.title}</h5>
          <p className="text-secondary">Robert</p>
          <ul className="d-flex list-unstyled gap-3 m-0">
            <li><button type="button" className="li-button">comments </button></li>
            <li><button type="button" className="li-button" onClick={() => dispatch(removeBook(data))}>remove </button></li>
            <li><button type="button" className="li-button">edit </button></li>
          </ul>
        </Col>
        <Col className="my-auto me-3">
          <div className="d-flex justify-content-end">
            <CircleProgress percentage={75} fontColor="transparent" strokeWidth={5} width={120} secondaryColor="gainsboro" />
            <div className="my-auto ps-2">
              <h2>65%</h2>
              <p className="text-secondary top-0">Completed</p>
            </div>
          </div>
        </Col>
        <Col className="p-4 m-auto">
          <p className="text-secondary m-0">CURRENT CHAPTER</p>
          <p className="fw-bold">Chapter 17</p>
          <Button className=" ps-5 pe-5 border border-0 text-light">Update Progress</Button>
        </Col>
      </Row>
    </div>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
