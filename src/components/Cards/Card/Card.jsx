import React, { useState } from "react";
import {
  Col,
  Panel,
  Tag,
  Drawer,
  Button,
  ButtonToolbar,
  Divider
} from "rsuite";

import DetailCard from "../DetailCard";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checktype = () => {
    switch (data.type) {
      case "Issue":
        return "red";
      case "Task":
        return "gray";
      default:
        return "green";
    }
  };

  let shortdescription = data.description.slice(0, 150) + "...";

  return (
    <>
      <Col
        md={6}
        sm={12}
        style={{ marginTop: "0.6rem", marginRight: "0.5rem" }}
      >
        <Panel bordered shaded header={data.title} id="hola perro">
          <div style={{ float: "right" }}>
            <strong>{data.user}</strong>
          </div>
          <br />
          <div>
            <Tag size="lg" color={checktype()}>
              {data.type}
            </Tag>
            <strong>
              <span style={{ float: "right", color: "green" }}>
                {data.sprint}
              </span>
            </strong>
          </div>

          <div style={{ height: "4.5rem", margin: "auto" }}>
            <strong>Description: </strong>
            {shortdescription}
          </div>

          <ButtonToolbar>
            <Divider>
              <Button onClick={handleOpen} style={{ right: "0px" }}>
                Details
              </Button>
            </Divider>
          </ButtonToolbar>

          {/* Card in left side */}
          <Drawer open={open} onClose={handleClose}>
            <Drawer.Header style={{ backgroundColor: "#1a2336" }}>
              <Drawer.Title style={{ marginTop: "1.5rem", color: "white" }}>
                <strong style={{ fontSize: "2rem" }}>{data.title}</strong>
              </Drawer.Title>
              <strong style={{ fontSize: "1.2rem", color: "white" }}>
                {data.user}
              </strong>
            </Drawer.Header>
            <DetailCard detailData={data} />
          </Drawer>
        </Panel>
      </Col>
    </>
  );
};

export default Card;
