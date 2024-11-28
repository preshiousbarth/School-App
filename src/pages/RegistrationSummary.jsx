// src/pages/RegistrationSummary.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const RegistrationSummary = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No registration data available</p>;
  }

  return (
    <div className="registration-summary">
      <h2>Registration Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Mother's Name:</strong> {formData.motherName}</p>
      <p><strong>Father's Name:</strong> {formData.fatherName}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>LGA:</strong> {formData.lga}</p>
      <p><strong>Permanent Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Favorite Subject:</strong> {formData.favoriteSubject}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>State of Origin:</strong> {formData.stateOfOrigin}</p>
    </div>
  );
};

export default RegistrationSummary;
