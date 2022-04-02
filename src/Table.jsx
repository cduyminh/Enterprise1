import { useState, useEffect } from "react";
import { Card, Table } from "antd";
const MyTable = () => {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "ID",
      dataIndex: "park_Id",
    },
  ];

  const fetchTable = async () => {
    setLoading(true);
    setError(null);
    const array = [];

    try {
      const response = await fetch(
        "https://api.data.gov.hk/v1/carpark-info-vacancy"
      );
      const data = await response.json();
      data.results.map((item, index) => {
        array.push({
          key: index,
          park_Id: item.park_Id,
          name: item.name,
        });
      });
      setTable(array);
      console.log(data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTable();
  }, []);

  return (
    <Card>
      <Table
        loading={loading}
        style={{ backgroundColor: "white" }}
        pagination={{ position: "bottomRight" }}
        columns={columns}
        dataSource={table}
      />
    </Card>
  );
};

export default MyTable;
