import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const Users = () => {
  const headers = [
    {
      dataKey: "id",
      name: "ID",
    },
    {
      dataKey: "name",
      name: "Name",
    },
    {
      dataKey: "lastName",
      name: "Last Name",
    },
    {
      dataKey: "email",
      name: "Email",
    },
    {
      dataKey: "tag",
      name: "Tag",
    },
  ];
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users on rendering.
  useEffect(() => {
    // TODO: Fetch users from the backend.
    setUsers([
      {
        id: 1,
        name: "Sasuke",
        lastName: "Uchiha",
        email: "sasuke.uchiha@konoha.com",
        tag: "jounin",
      },
      {
        id: 2,
        name: "Naruto",
        lastName: "Uzumaki",
        email: "naruto.uzumaki@konoha.com",
        tag: "jounin",
      },
      {
        id: 3,
        name: "Itachi",
        lastName: "Uchiha",
        email: "itachi.uchiha@konoha.com",
        tag: "jounin",
      },
    ]);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <h4>Users</h4>
      <p>Here you can administrate the users of the project.</p>
      <br />
      <Table autoHeight width={1300} loading={isLoading} data={users} onRowClick={(row) => console.log(row)}>
        {headers.map((header, i) => (
          <Column flexGrow={i + 1}>
            <HeaderCell>{header.name}</HeaderCell>
            <Cell dataKey={header.dataKey} />
          </Column>
        ))}
        <Column flexGrow={headers.length + 1} fixed="right">
          <HeaderCell></HeaderCell>
          <Cell>
            {(rowData) => (
              <span>
                <Button
                  style={{ padding: "1px" }}
                  appearance="link"
                  color="blue"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  Edit
                </Button>
                &nbsp;|&nbsp;
                <Button
                  style={{ padding: "1px" }}
                  appearance="link"
                  color="red"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  Remove
                </Button>
              </span>
            )}
          </Cell>
        </Column>
      </Table>
    </>
  );
};

export default Users;
