import React, { useState } from "react";
import NameInput from "../input/input.components";
import axios from "axios";
import SuccessBtn from "../buttons/success";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../notifications/error";

function LoginComponent() {
  const navigate = useNavigate(); // useNavigate hook'ini import qilib olish
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/signin", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        window.location.href = "/overview";
      })
      .catch((error) => {
        setErrorTitle(error.response.data.msg);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);               
        }, 7000);
        ;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {showErrorAlert && <ErrorAlert title={errorTitle} />}

        <NameInput
          label="Username"
          value={userInfo.username}
          onChange={handleChange}
          name="username"
          type="username"
        />
        <NameInput
          label="Password"
          value={userInfo.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <SuccessBtn title="Login" />
      </form>
    </div>
  );
}

export default LoginComponent;
