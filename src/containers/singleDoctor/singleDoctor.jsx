import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleDoctorComponent from "../../components/singleDoctor/singleDoctor.component";
import LoaderComponent from "../../components/loader/loader";
import ErrorAlert from "../../components/notifications/error";

function SingleDoctor() {
  const [data, setData] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((err) => {
        setData({
          isFatched: true,
          data: null,
          err: true,
        });
        <ErrorAlert />;
        throw new err();
      });
  }, []);
  return (
    <div>
      <div>
        {data.isFatched && data.data ? (
          data.data.map((item, index) => (
            <SingleDoctorComponent
              key={index}
              id={item.id}
              role={item.role}
              name={item.name}
              email={item.email}
              workDay={item.nextWorkDay}
            />
          ))
        ) : (
          <LoaderComponent />
        )}
      </div>
    </div>
  );
}

export default SingleDoctor;
