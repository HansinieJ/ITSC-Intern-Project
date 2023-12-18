import React from 'react';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
import { CATForm } from '../../components/CATForm';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
    console.log(`assessment service`, data);

  };
  return (
    <CATForm onSubmit={onSubmit} />
  );
};
