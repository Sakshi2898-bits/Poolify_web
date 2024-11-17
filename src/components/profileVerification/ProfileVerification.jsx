import React, { useState } from "react";
import { FaCheckCircle, FaIdCard, FaPhone, FaEdit, FaEnvelope, FaCar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import "./ProfileVerification.scss";

const VehicleSelection = ({ title, options, nextStep, setVehicleDetails, isModelSelection, isColorSelection }) => {
  const handleOptionClick = (option) => {
    if (isModelSelection) {
      setVehicleDetails((prevState) => ({
        ...prevState,
        model: option,
      }));
    } else if (isColorSelection) {
      setVehicleDetails((prevState) => ({
        ...prevState,
        color: option,
      }));
    } else {
      setVehicleDetails({ brand: option });
    }
    nextStep();
  };

  return (
    <div className="vehicle-selection">
      <h4>{title}</h4>
      <div className="vehicle-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="vehicle-option"
            onClick={() => handleOptionClick(option)}
          >
            <span>{option}</span>
            <SlArrowRight className="icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileVerification = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState({
    idVerified: false,
    phoneVerified: false,
    emailVerified: false,
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [step, setStep] = useState(1);
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({
    brand: "",
    model: "",
    color: "",
  });

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      toast.success("Profile picture uploaded successfully!");
    }
  };

  const handleVerifyID = () => {
    setTimeout(() => {
      setVerificationStatus((prev) => ({ ...prev, idVerified: true }));
      toast.success("Government ID verified!");
    }, 1000);
  };

  const handleVerifyPhone = () => {
    setTimeout(() => {
      setVerificationStatus((prev) => ({ ...prev, phoneVerified: true }));
      toast.success("Phone number confirmed!");
    }, 1000);
  };

  const handleVerifyEmail = () => {
    setTimeout(() => {
      setVerificationStatus((prev) => ({ ...prev, emailVerified: true }));
      toast.success("Email ID confirmed!");
    }, 1000);
  };

  const handleProfileEdit = () => {
    toast.success("Profile updated successfully!");
    setIsEditingProfile(false);
  };

  const handleContinue = (brand, model, color) => {
    setVehicleDetails({ brand, model, color });
    setStep(4); 
  };

  const handleAddVehicle = () => {
    setIsAddingVehicle(true); 
  };

  return (
    <div className="profile-verification">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2>Profile Details</h2>

     

      <div className="section profile-photo">
      <Profile className="svg-icon" />
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
          />
          {profilePicture && (
            <div className="preview">
              <img src={profilePicture} alt="Profile Preview" />
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="section">
        <h3>
          <FaEdit className="icon" />{" "}
          <span className="clickable-text" onClick={() => setIsEditingProfile(!isEditingProfile)}>
            {isEditingProfile ? "Close Edit Profile" : "Edit Your Profile"}
          </span>
        </h3>
        {isEditingProfile ? (
          <form
            className="edit-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleProfileEdit();
            }}
          >
            <label>
              First Name
              <input
                type="text"
                value={profileDetails.firstName}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, firstName: e.target.value })
                }
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                value={profileDetails.lastName}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, lastName: e.target.value })
                }
              />
            </label>
            <label>
              Date of Birth
              <input
                type="date"
                value={profileDetails.dob}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, dob: e.target.value })
                }
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={profileDetails.email}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, email: e.target.value })
                }
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                value={profileDetails.phone}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, phone: e.target.value })
                }
              />
            </label>
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        ): null }
      </div>

      {/* Verification Section */}
      <div className="section">
        <h3>Verify Your Profile</h3>
        <div className="verification-item">
          <button
            className={`verify-button ${verificationStatus.idVerified ? "verified" : ""}`}
            onClick={handleVerifyID}
            disabled={verificationStatus.idVerified}
          >
            <FaIdCard className="icon" /> {verificationStatus.idVerified ? "ID Verified" : "Verify Govt ID"}
          </button>
          {verificationStatus.idVerified && (
            <FaCheckCircle className="status-icon" />
          )}
        </div>
        <div className="verification-item">
          <button
            className={`verify-button ${verificationStatus.phoneVerified ? "verified" : ""}`}
            onClick={handleVerifyPhone}
            disabled={verificationStatus.phoneVerified}
          >
            <FaPhone className="icon" /> {verificationStatus.phoneVerified ? "Phone Confirmed" : "Confirm Phone Number"}
          </button>
          {verificationStatus.phoneVerified && (
            <FaCheckCircle className="status-icon" />
          )}
        </div>
        <div className="verification-item">
          <button
            className={`verify-button ${verificationStatus.emailVerified ? "verified" : ""}`}
            onClick={handleVerifyEmail}
            disabled={verificationStatus.emailVerified}
          >
            <FaEnvelope className="icon" /> {verificationStatus.emailVerified ? "Email Confirmed" : "Confirm Email ID"}
          </button>
          {verificationStatus.emailVerified && (
            <FaCheckCircle className="status-icon" />
          )}
        </div>
      </div>

      {/* Add Vehicle Button */}
      {!isAddingVehicle && (
        <div className="section">
          <h3>
            <FaCar className="icon"/>{" "}
            <span className="clickable-text" onClick={handleAddVehicle}>
            Add Vehicle
          </span>
          </h3>
        </div>
      )}

      {/* Vehicle Selection Section */}
      {isAddingVehicle && (
        <div className="section">
          <h3>
            <FaCar className="icon" /> Add Vehicle
          </h3>

          {step === 1 && (
            <VehicleSelection
              title="Select your vehicle brand"
              options={["Maruti", "Hyundai", "Ford", "Honda", "Tata"]}
              nextStep={() => setStep(2)}
              setVehicleDetails={setVehicleDetails}
            />
          )}

          {step === 2 && (
            <VehicleSelection
              title="Select your car model"
              options={vehicleDetails?.brand === "Maruti" ? ["Swift", "WagonR", "Dzire"] : []}
              nextStep={() => setStep(3)}
              setVehicleDetails={setVehicleDetails}
              isModelSelection={true}
            />
          )}

          {step === 3 && (
            <VehicleSelection
              title="Select your car color"
              options={["Red", "Blue", "Black", "White", "Silver"]}
              nextStep={() => handleContinue(vehicleDetails.brand, vehicleDetails.model, "color")}
              setVehicleDetails={setVehicleDetails}
              isColorSelection={true}
            />
          )}
           {step === 4 && (
            <div className="selected-vehicle-details">
              <p><strong>Brand:</strong> {vehicleDetails.brand}</p>
              <p><strong>Model:</strong> {vehicleDetails.model}</p>
              <p><strong>Color:</strong> {vehicleDetails.color}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileVerification;