import React, { useEffect, useState } from "react";
import NameInput from "../../components/input/input.components";
import DateComponent from "../../components/date/date";
import SuccessBtn from "../../components/buttons/success";
import { useParams } from "react-router-dom";
import axios from "axios";
import SuccessAlert from "../../components/notifications/success";
import ErrorAlert from "../../components/notifications/error";

function EditContainer() {
  const [editInfo, setEditInfo] = useState({
    name: "",
    role: "",
    nextWorkDay: "",
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInfo({
      ...editInfo,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setEditInfo({
      ...editInfo,
      nextWorkDay: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/doctor/${id}`, editInfo, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 6000);
      })
      .catch((error) => {
        setErrorTitle(error.response.data);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      });
  };

  return (
    <div>
      <div
        className={`success__container ${
          showSuccessAlert ? "success_alert" : ""
        }`}
      >
        {showSuccessAlert && <SuccessAlert title={"Successfully updated!"} />}
      </div>

      {showErrorAlert && <ErrorAlert title={errorTitle} />}

      <form onSubmit={handleSubmit}>
        <NameInput
          type="text"
          name="name"
          label="Name"
          value={editInfo.name}
          onChange={handleChange}
          required={true}
        />
        <NameInput
          type="text"
          name="role"
          label="Role"
          value={editInfo.role}
          onChange={handleChange}
          required={true}
        />
        <DateComponent
          name="nextWorkDay"
          label="Next Work Day"
          onDateChange={handleDateChange}
          value={editInfo.nextWorkDay}
        />
        <SuccessBtn title="Save" />
      </form>
    </div>
  );
}

export default EditContainer;
