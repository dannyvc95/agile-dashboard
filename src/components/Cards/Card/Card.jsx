import React, { useState } from "react";
import {
  Col,
  Panel,
  Tag,
  Timeline,
  Modal,
  Button,
  ButtonToolbar,
  Divider,
} from "rsuite";

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

  data.description = data.description.slice(0, 150) + "...";

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
            {data.description}
          </div>

          <ButtonToolbar>
            <Divider>
              <Button onClick={handleOpen} style={{ right: "0px" }}>
                History
              </Button>
            </Divider>
          </ButtonToolbar>

          <Modal overflow={false} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title>
                <strong>History:</strong> {data.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Timeline>
                {Object.values(data.times)
                  .slice(0, 4)
                  .map((time) => {
                    return (
                      <>
                        <Timeline.Item>{time}</Timeline.Item>
                      </>
                    );
                  })}
              </Timeline>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Panel>
      </Col>
    </>
  );
};

export default Card;
