import Button from "../Button";

export default function TableRow({ id, name, image, description }) {
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
          <Button>{`Enabled / Disabled`}</Button>
        </td>
      </tr>
    </>
  );
}
