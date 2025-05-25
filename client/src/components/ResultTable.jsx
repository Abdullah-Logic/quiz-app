import { useEffect, useState } from "react";
import { getServerData } from "../helper/Help";
export default function ResultTable() {
  const [data, setData] = useState([]);

const fetchData = async () => {
      try {
        const result = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`
        );
        setData(result);
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
  useEffect(() => {
      fetchData();
  }, []);
   console.log("data;", data)
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earned Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No Data Found </div>}
          {data.map((v, i) => (
            <tr className="table-body" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts !== undefined ? v?.attempts : 0}</td>
              <td>{v?.points !== undefined ? v?.points : 0}</td>
              <td>{v?.achieved || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
