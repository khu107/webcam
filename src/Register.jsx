import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Regiter() {
  return (
    <Form>
      <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="age" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicWeight">
        <Form.Label>Weight / kg</Form.Label>
        <Form.Control type="number" placeholder="weight" />
      </Form.Group>

      <Form.Group className="mb-5 " controlId="formBasicHeight">
        <Form.Label>Height / sm</Form.Label>
        <Form.Control type="number" placeholder="height" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="male" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="famele" />
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>
  );
}
