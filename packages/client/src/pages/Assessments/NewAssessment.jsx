import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form>

    <div>
      <h1>Cat Behavioral Instrument</h1>

    </div>
    <div>
      <div>Cat Details</div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control type="text" placeholder="Micky" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="text" placeholder="02-02-2020" />
      </Form.Group>



    </div>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Instrument Name</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Calculated score</Form.Label>
      <Form.Control type="number" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Determined risk level</Form.Label>
      <Form.Control type="text" placeholder="name@example.com" />
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
