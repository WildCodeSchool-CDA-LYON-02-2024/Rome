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
    fetchData(
      `http://localhost:3310/province/${provinceID}/building`,
      "GET",
      setBuildings,
      setError,
      setLoading,
    );
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
