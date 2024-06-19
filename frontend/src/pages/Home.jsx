import { json, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const myFn = () => {
    fetch("http://localhost:3310/province/:id/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => json(res))
      .catch((err) => console.error("Error :", err));
  };

  return (
    <>
      <h1>This is Home.jsx</h1>
    </>
  );
}

export default Home;
