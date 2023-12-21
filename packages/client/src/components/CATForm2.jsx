
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';



export const CATForm2 = ({ onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm();

  // console.log(errors);
  // console.log(handleSubmit);
  // console.log(watch(`example`));// watch input value by passing the name of it

  const onSubmitHandler = (values) => {
    console.log(`values from CATForm`, values);
    onSubmit(values);
    reset();
  };
  return (
<div>
  <h1>Cat Behavioral Instrument</h1>
</div>

<Form  onSubmit={handleSubmit(onSubmitHandler)}>
    <div>
            <h2>Instrument</h2>
            <ul>
              <li>Cat Behavioral Instrument </li>
            </ul>
            <input ref={register} { required: `*Required Field` } type="text" name="name" }
              placeholder="Instrument Type" type="text" id="instrumntTypeID" />
            <p>{errors.catName?.message}</p>
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
    <Button variant="primary" type="submit" >Submit</Button>
  </Form>;
 </>

  );
};