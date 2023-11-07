import React from "react";
import NameInput from "../../components/input/input.components";
import ErrorBtn from "../../components/buttons/logout";
import { NavLink } from "react-router-dom";

function Logout() {
  const handleSubmit = (e) => {
    // e.preventDefault();
    localStorage.removeItem("token");
    window.location.href="/overview"
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NameInput type="email" label="Email" name="Email" required={true} />
        {/* <NavLink to="/overview"> */}
          <ErrorBtn title="Logout" />
        {/* </NavLink> */}
      </form>
    </div>
  );
}

export default Logout;
