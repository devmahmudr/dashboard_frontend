import React from "react";
import NavbarComponent from "../components/navbar/navbar.component";
import HeaderComponent from "../components/header/header.component";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <NavbarComponent />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <HeaderComponent />
            <Outlet />
          </div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
}
