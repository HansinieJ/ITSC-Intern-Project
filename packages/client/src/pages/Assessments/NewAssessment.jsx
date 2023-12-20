import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { AssessmentService } from '../../services/AssessmentService';
import { CATForm } from '../../components/CATForm';
import 'react-toastify/dist/ReactToastify.css';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
    console.log(`assessment service`, data);

    toast(`Successfully submitted`);
  };
  return (
    <>
      <CATForm onSubmit={onSubmit} />
      <ToastContainer />
    </>
  );
};
