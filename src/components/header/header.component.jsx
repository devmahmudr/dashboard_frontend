import { NavLink } from "react-router-dom";
// import siteLogo from "../../assets/logo- 2.svg";
import "./_header.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import lupa from "../../assets/lupa.svg"
import avatar from '../../assets/avatar.jpeg'

function HeaderComponent() {
  const [dt, setDt] = useState({ isFatched: false, data: {}, err: false });
  useEffect(() => {
    axios
      .get("http://localhost:5000/header")
      .then((data) => {
        setDt({
          isFatched: true,
          data: data.data,
          err: false,
        });
      })
      .catch((err) => {
        setDt({
          isFatched: true,
          data: null,
          err,
        });
      });
  }, []);
  return (
    <header className="header">
      <div className="header__left">
        <form action="http://localhost:5000/" method="GET" className="search_form">
          <img src={lupa} alt="search" className="lupa" />
          <input type='search' placeholder="Search doctors"/>
        </form>
      </div>
      <span></span>
      <div className="header__right">
        <img src={avatar} alt="useravatar" className="avatar"/>
        <div className="header__right__details">
          <p>Rakhtmatjonov</p>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
