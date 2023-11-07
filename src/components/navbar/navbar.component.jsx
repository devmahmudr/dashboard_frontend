import axios from "axios";
import { useEffect, useState } from "react";
import siteLogo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import overview from "../../assets/overview.svg";
import doctors from "../../assets/doctors.svg";
import logout from "../../assets/logout.svg";
import phone from "../../assets/phone.svg";
import results from "../../assets/resrults.svg";
import settings from "../../assets/settings.svg";
import "./_navbar.scss"

const iconArr = [overview, doctors, results,];

function NavbarComponent({}) {
  const [data, setData] = useState({ isFatched: false, data: {}, err: false });

  useEffect(() => {
    axios
      .get("http://localhost:5000/sidebar")
      .then((res) => {
        setData({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((error) => {
        setData({
          isFatched: true,
          data: null,
          err: error,
        });
      });
  }, []);
  return (
    <div className={`navbar`}>
      <div className="navbar__top">
        <NavLink to='/overview'>
          <img src={siteLogo} alt="sitelogo" />
        </NavLink>
      </div>
      <div className="navbar__center">
        {data.isFatched
          ? data.data.sidebar_titles.map((title, index) => (
              <NavLink
                key={index}
                to={`/${title.toLowerCase()}`}
                className={"navbar__btn"}
              >
                <img src={iconArr[index]} alt="" />
                <p className="navbar__center__titles">{title}</p>
              </NavLink>
            ))
          : "loading"}
        <p className="account">ACCOUNT</p>
        <NavLink to="/settings" className={"navbar__btn"}>
          <img src={settings} alt="" />
          <p className="hidden-titles">Settings</p>
        </NavLink>
        <NavLink to="/logout" className={"navbar__btn"}>
          <img src={logout} alt="" />
          <p className="hidden-titles">Logout</p>
        </NavLink>
      </div>
      <div className="navbar__bottom"></div>
    </div>
  );
}

export default NavbarComponent;
