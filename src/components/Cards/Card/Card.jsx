import React, { useState } from "react";
import { Col, Panel, Tag, Timeline, Animation, Button } from "rsuite";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

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

  return (
    <>
      <Col md={6} sm={12} style={{marginTop: "0.6rem", marginRight: "0.5rem"}}>
        <Panel bordered header={data.title}>
        <div><Tag size= "lg" color={checktype()}> {data.type} </Tag> <p>User: {data.user}</p> </div>
        
          <p>Sprint: {data.sprint}</p>
          <p>Description: {data.description}</p>

          <Button onClick={handleToggle}>History</Button>
          <Animation.Collapse in={show}>
            <Timeline>
              {Object.values(data.times).slice(0, 4).map((time) => {
                return <>
                <Timeline.Item>{time}</Timeline.Item>
                </>
              })}
            </Timeline>
          </Animation.Collapse>
        </Panel>
      </Col>
    </>
  );
};

export default Card;
