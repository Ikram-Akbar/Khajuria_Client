import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Introduction = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/intro.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
   
      <div>
        {datas.map((data, index) => (
          <Table
            className="border-secondary my-2"
            responsive
            key={index}
            striped
            bordered
            hover
          >
            <tbody>
              <tr>
                <td>Country </td>
                <td>{data?.Country}</td>
              </tr>
              <tr>
                <td>Administrative division</td>
                <td>{data?.Administrative_division}</td>
              </tr>
              <tr>
                <td>District</td>
                <td>{data?.District}</td>
              </tr>
              <tr>
                <td>Upazila</td>
                <td>{data?.Upazila}</td>
              </tr>
              <tr>
                <td>Mouza No</td>
                <td>{data.Mouza_no}</td>
              </tr>
              <tr>
                <td>Union Parishad</td>
                <td>{data?.Union_parishad}</td>
              </tr>
              <tr>
                <td>U.P Serial</td>
                <td>{data.UP_serial}</td>
              </tr>
              <tr>
                <td>Nickname</td>
                <td>{data?.Nickname}</td>
              </tr>
              <tr>
                <td>Demonym</td>
                <td>{data?.Demonym}</td>
              </tr>
              <tr>
                <td>Government Type</td>
                <td>{data?.Government_type}</td>
              </tr>
              <tr>
                <td>Postal Code</td>
                <td>{data?.Postal_code}</td>
              </tr>
              <tr>
                <td>Website </td>
                <td>{data?.Website}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </>
  );
};

export default Introduction;
