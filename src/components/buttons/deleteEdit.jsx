import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import deleteI from "../../assets/delete.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function DeleteEditBtn({ id }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/doctor/${id}`,{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      .then((res) => {
        window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 0.6 } }}>
      <Tooltip title="delete">
        <Fab color="red" aria-label="delete" onClick={handleDelete}>
          <img style={{ width: "20px", height: "20px" }} src={deleteI}></img>
        </Fab>
      </Tooltip>
      <Tooltip title="edit">
        <NavLink to={`/edit/${id}`}>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </NavLink>
      </Tooltip>
    </Box>
  );
}
