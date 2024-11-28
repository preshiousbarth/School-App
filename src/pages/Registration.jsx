import React, { useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import "../index.css";

const stateToLgaMap = {
  Lagos: ["Ikeja", "Surulere", "Victoria Island", "Epe", "Badagry"],
  Abuja: ["Abaji", "Gwagwalada", "Kwali", "Bwari"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Okrika", "Emohua", "Bonny", "Ahoada East", "Andoni", "Ogoni"],
  Kaduna: ["Kaduna North", "Kaduna South", "Jaba", "Zangon Kataf", "Soba"],
};

const Registration = () => {
  const [step, setStep] = useState(1); // Step tracking for the form
  const [formData, setFormData] = useState({
    name: "",
    motherName: "",
    fatherName: "",
    dob: "",
    favoriteSubject: "",
    city: "",
    stateOfOrigin: "",
    lga: "",
  });

  const [lgas, setLgas] = useState([]);
  const [submittedData, setSubmittedData] = useState(null); // Store submitted data

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update LGAs if the state is changed
    if (name === "stateOfOrigin") {
      setLgas(stateToLgaMap[value] || []);
      setFormData((prevData) => ({ ...prevData, lga: "" })); // Reset LGA if state changes
    }
  };

  // Move to the next form step
  const handleNext = () => setStep(step + 1);

  // Move to the previous form step
  const handleBack = () => setStep(step - 1);

  // Submit form data and save to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = collection(db, "registrations");
      await addDoc(docRef, formData);

      setSubmittedData(formData); // Store data locally for summary
      setStep(6); // Move to summary step

      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  // Edit form after submission
  const handleEdit = () => setStep(1);

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registration Form</h2>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(step / 6) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="form-step">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mother's Name</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Enter your mother's name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter your father's name"
                  required
                />
              </div>
              <button type="button" onClick={handleNext} className="next-btn">
                Next
              </button>
            </div>
          )}

          {/* Step 2: Date of Birth */}
          {step === 2 && (
            <div className="form-step">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
              <button type="button" onClick={handleNext} className="next-btn">
                Next
              </button>
            </div>
          )}

          {/* Step 3: Favorite Subject */}
          {step === 3 && (
            <div className="form-step">
              <div className="form-group">
                <label>Favorite Subject</label>
                <select
                  name="favoriteSubject"
                  value={formData.favoriteSubject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your favorite subject</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                  <option value="C.R.S">C.R.S</option>
                  <option value="Further Math">Further Math</option>
                  <option value="Data Processing">Data Processing</option>
                  <option value="Arts">Arts</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
              <button type="button" onClick={handleNext} className="next-btn">
                Next
              </button>
            </div>
          )}

          {/* Step 4: City */}
          {step === 4 && (
            <div className="form-step">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                />
              </div>
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
              <button type="button" onClick={handleNext} className="next-btn">
                Next
              </button>
            </div>
          )}

          {/* Step 5: State and LGA */}
          {step === 5 && (
            <div className="form-step">
              <div className="form-group">
                <label>State of Origin</label>
                <select
                  name="stateOfOrigin"
                  value={formData.stateOfOrigin}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select State</option>
                  {Object.keys(stateToLgaMap).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Local Government Area (LGA)</label>
                <select
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select LGA</option>
                  {lgas.map((lga, index) => (
                    <option key={index} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          )}

          {/* Step 6: Summary */}
          {step === 6 && submittedData && (
            <div className="summary-step">
              <h3>Registration Summary</h3>
              <ul>
                {Object.entries(submittedData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={handleEdit} className="edit-btn">
                Edit Form
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
