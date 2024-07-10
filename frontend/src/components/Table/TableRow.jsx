import Button from "../Button";
import { useState } from "react";
import fetchData from "../../services/fetchData";

export default function TableRow({ id, name, image, description }) {
  const [isConstructing, setIsConstructing] = useState(false);
  const [constructMsg, setConstructMsg] = useState("");

  const handleConstruction = () => {
    setIsConstructing(true);
    setConstructMsg("Construction en cours...");

    const provinceID = 1;
    console.log("id: ", id);

    fetchData(
      `http://localhost:3310/province/${provinceID}/building/${id}/construct`,
      "POST",
    );

    fetch(
      `http://localhost:3310/province/${provinceID}/building/${id}/construct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      },
    )
      .then((res) => {
        console.log("res: ", res);
        if (!res.ok)
          throw new Error(
            `Construction failed: ${res.status} ${res.statusMessage}`,
          );
        return res.json();
      })
      .then((data) => {
        setIsConstructing(false);
        setConstructMsg(`Construction démarrée avec succès !`);
      })
      .catch((err) => {
        setIsConstructing(false);
        setConstructMsg(
          `Erreur lors du démarrage de la construction: ${err.message}`,
        );
      });
  };

  return (
    <>
      <tr className="tableRow">
        <th scope="row">{name}</th>
        <td>
          <img className="building-img" src={`${image}`} alt={description} />
        </td>
        <td>{description}</td>
        <td>
          {/* IF building is in DB for this province/user -> Amelioration */}
          <Button onClick={handleConstruction} disabled={isConstructing}>
            Construire
          </Button>
          {constructMsg}
        </td>
      </tr>
    </>
  );
}
