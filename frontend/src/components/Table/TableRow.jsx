export default function TableRow({ name, image, description }) {
  return (
    <>
      <tr className="tableRow">
        <th scope="row">{name}</th>
        <td>
          <img src={`./public/images/${image}`} alt={description} />
        </td>
        <td>{description}</td>
      </tr>
    </>
  );
}
