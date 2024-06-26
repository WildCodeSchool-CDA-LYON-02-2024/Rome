import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../components/Table/Table";

export default function Buildings() {
  const navigate = useNavigate();

  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Import provinceId dynamically with the :id in the route
  const fetchData = () => {
    fetch("http://localhost:3310/province/1/building", {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>This is Buildings.jsx</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Table buildings={buildings} />
      )}
    </>
  );
}
