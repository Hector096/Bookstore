import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function Books(props) {
  const { data } = props;
  return (
    <div>
      <Row className="m-5 border border-2 bg-white">
        <Col className="p-4 m-auto"><h5>{data.title}</h5></Col>
        <Col className="p-4 m-auto"><Button className="bg-danger border border-0">Remove</Button></Col>
      </Row>
    </div>
  );
}

Books.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
