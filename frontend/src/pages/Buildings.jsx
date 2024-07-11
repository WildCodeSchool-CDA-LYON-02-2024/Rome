import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Button from "../components/Button";
import "../pages/Buildings.css";
import fetchData from "../services/fetchData";

export default function Buildings() {
  const navigate = useNavigate();

  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Import provinceId dynamically with the :id in the route
  const provinceID = 1;

  const getBuildings = () => {
    const data = fetchData(
      `http://localhost:3310/province/${provinceID}/building`,
      "GET",
    );
    console.log("data:", data);
    // .then((result) => setBuildings(result))
    // .catch((err) => setError(err.message))
    // .finally(() => setLoading(false));
    /*
        fetch(`http://localhost:3310/province/${provinceID}/building`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) throw new Error("Retrieval failed");
            return res.json();
          })
          .then((data) => {
            setBuildings(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error :", err);
            setError(err.message);
            setLoading(false);
          });
          */
  };

  useEffect(() => {
    getBuildings();
  }, []);

  function handleClick() {
    navigate("/province");
  }

  return (
    <>
      <div className="h1-title">
        <h1>Bâtiments</h1>
        <Button className="close-btn" onClick={handleClick}>
          Fermer
        </Button>
      </div>
      <section className="section-building">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Table buildings={buildings} />
        )}
      </section>
    </>
  );
}
