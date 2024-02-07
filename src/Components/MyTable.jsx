
import { Table } from 'react-bootstrap';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Data 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Header 2</td>
          <td>Data 2</td>
        </tr>
        <tr>
          <td>Header 3</td>
          <td>Data 3</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
