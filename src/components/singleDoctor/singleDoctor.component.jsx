import React, { useState } from "react";
import "./_singleDoctor.scss";
import DeleteEditBtn from "../buttons/deleteEdit";

function SingleDoctorComponent({ id, name, email, role, workDay }) {
  return (
    <div className="singleD__container">
      <div className="card__wrapper">
        <div>
          <p>Doctor id: {id}</p>
          <p>Doctor name: {name}</p>
          <p>Doctor role: {role}</p>
          <p>Doctor email: {email}</p>
        </div>
        <div>
          <p>Next work day: {workDay}</p>
        </div>
      </div>
      <div className="buttons">
        <DeleteEditBtn id={id} />
      </div>
    </div>
  );
}

export default SingleDoctorComponent;
