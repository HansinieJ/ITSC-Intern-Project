import React, { useEffect, useState } from 'react';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      const assessmentData = await AssessmentService.getList();
      setAssessments(assessmentData.data.assessments);
    };
    fetchAssessments();
  }, []);

  return (
    <div>
      {/*
          List goes here
          Please use the library react-table https://www.npmjs.com/package/react-table
      */}
      <h1>List of Assessments</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
            <th>Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map(assessment =>
            <tr key={assessment.id}>
              <td>{assessment.id}</td>
              <td>{assessment.catName}</td>
              <td>{assessment.score}</td>
              <td>{assessment.riskLevel}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};
