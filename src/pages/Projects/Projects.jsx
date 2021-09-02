import React,{ useEffect, useState }  from "react";
import { Button, Table } from "rsuite";
import { FiPlusSquare } from "react-icons/fi";

const { Column, HeaderCell, Cell } = Table;


const Projects = () => {
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
          dataKey: "description",
          name: "Description",
        },
        {
          dataKey: "currentSprint",
          name: "Current Sprint",
        },
      ];
      const [projects, setProjects] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      // Fetch projects information on rendering.
  useEffect(() => {
    // TODO: Fetch projects from the backend.
    setProjects([
      {
        id: 1,
        name: "Boruto's Abortion",
        description: "Prevention of future boring chaos",
        currentSprint: "week 2",
      },
      {
        id: 2,
        name: "Ero Senin Last Book",
        description: "Release of the latest master piece",
        currentSprint: "week 3",
      },
      {
        id: 3,
        name: "Itachi's Revival",
        description: "Revival of one of the greatests heroes",
        currentSprint: "week 1",
      },
    ]);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    //TODO: Create a "form" or something similar to create new projects to be used onClicl of the create button
    <> 
      <h4>Projects</h4>
      <p>Here you can view all the projects currently in the dashboard.</p>
      <br />
      <Table autoHeight width={1300} loading={isLoading} data={projects} onRowClick={(row) => console.log(row)}>
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
      <br />
      <Button
       style={{ padding: "1px"}}
       appearance="link"
       color="green"
       onClick={() => alert("Creating a new Project")}>
       <FiPlusSquare /> Add New
      </Button>
    </>
    
  );
};

export default Projects;