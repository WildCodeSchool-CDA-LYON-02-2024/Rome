import { useEffect } from "react";

export default function profil() {
  const userID = 7 
  useEffect(() => {
    fetch(`http://localhost:3310/user/${userID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setRessource(data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des données :", err);
      });
  }, [provinceID]);

  return <div></div>;
}
