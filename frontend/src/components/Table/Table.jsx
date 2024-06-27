import TableRow from "./TableRow";
import "./Table.css";

export default function Table({ buildings }) {
  return (
    <>
      <table>
        <thead>
          <tr className="tHeadRow">
            <th scope="col">Nom</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {buildings &&
            buildings.map((building) => (
              <TableRow
                key={building.id}
                id={building.id}
                name={building.name}
                image={building.image}
                description={building.description}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
