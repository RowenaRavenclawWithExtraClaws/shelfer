import { Table } from "reactstrap";
import { TableProps } from "../utility/types";

const CustomTable = (props: TableProps) => {
  return (
    <Table hover style={{ marginTop: "2rem" }}>
      <thead>
        <tr>
          <th className="th-font-size">#</th>
          <th className="th-font-size">Title</th>
          <th className="th-font-size">ISBN</th>
          <th className="th-font-size">Authors</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, indx) => (
          <tr key={indx}>
            <th className="th-font-size" scope="row">
              {indx + 1}
            </th>
            <td className="th-font-size">{item.title}</td>
            <td className="th-font-size">{item.isbn}</td>
            <td className="th-font-size">{item.authors}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
