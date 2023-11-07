import React, { useState } from "react";
import NameInput from "../../components/input/input.components";
import axios from "axios";
import { Alert } from "@mui/material";
import SuccessAlert from "../../components/notifications/success";
import SuccessBtn from "../../components/buttons/success";
import "./_newDoctor.scss";
import ErrorAlert from "../../components/notifications/error";

function NewDoctor() {
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    role: "",
    gender: "",
    email: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo({
      ...doctorInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/doctor", doctorInfo, {
        headers: {
          "Content-Type": "application/json",
          Authorization:localStorage.getItem("token")
        },
      })
      .then((res) => {
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 6000);
      })
      .catch((error) => {
        <ErrorAlert />;
        throw new error();
      });
  };

  return (
    <div className="newD__container">
      <div
        className={`success__container ${
          showSuccessAlert ? "success_alert" : ""
        }`}
      >
        {showSuccessAlert && <SuccessAlert title={"Successfully created!"} />}
      </div>
      <div className="newD__details">
        {/* <div avatar>
          <input type="file" />
        </div> */}

        <form onSubmit={handleSubmit}>
          <p className="newD__title">Doctor details</p>
          <NameInput
            onChange={handleChange}
            value={doctorInfo.name}
            label="Name"
            name="name"
            type="text"
            required={true}
          />
          <NameInput
            onChange={handleChange}
            value={doctorInfo.gender}
            label="Gender"
            name="gender"
            type="text"
            required={true}
          />
          <NameInput
            onChange={handleChange}
            value={doctorInfo.role}
            label="Role"
            name="role"
            type="text"
            required={true}
          />
          <NameInput
            onChange={handleChange}
            value={doctorInfo.email}
            required={true}
            label="Email"
            name="email"
            type="email"
          />
          <SuccessBtn title="Create" />
        </form>
      </div>
    </div>
  );
}

export default NewDoctor;
