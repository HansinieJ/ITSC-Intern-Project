import React from 'react';
import { AssessmentService } from '../../services/AssessmentService';
import { CATForm } from '../../components/CATForm';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);

  };
  return (
    <CATForm />
  );
};
