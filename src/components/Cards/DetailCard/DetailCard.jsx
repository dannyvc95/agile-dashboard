import React, { useState } from "react";
import {
  Tag,
  Timeline,
  Drawer,
  Progress,
  Button,
  InputPicker,
  Input,
  InputNumber,
  InputGroup,
} from "rsuite";

const userstemp = [
  {
    label: "naruto@konoha.com",
    value: "naruto@konoha.com",
    role: "dev",
  },
  {
    label: "sasuke@konoha.com",
    value: "sasuke@konoha.com",
    role: "dev",
  },
  {
    label: "kakashi@konoha.com",
    value: "kakashi@konoha.com",
    role: "master",
  },
];

const sprintTemp = [
  {
    label: "First War",
    value: "First War",
  },
  {
    label: "Second War",
    value: "Second War",
  },
  {
    label: "Last War",
    value: "Last War",
  },
];

const projectTemp = [
  {
    label: "Desert",
    value: "Desert",
  },
  {
    label: "Konoha",
    value: "Konoha",
  },
  {
    label: "Wood",
    value: "Wood",
  },
];

const typeTemp = [
  {
    label: "Issue",
    value: "Issue",
  },
  {
    label: "Task",
    value: "Task",
  },
  {
    label: "Documentation",
    value: "Documentation",
  },
];

const DetailCard = ({ detailData }) => {
  const [edit, setEdit] = useState(true);

  let percent = (detailData.spendTime / detailData.estimae) * 100;
  let status = percent === 100 ? "success" : null;
  let color = percent === 100 ? "#52c41a" : "#3385ff";

  const checktype = () => {
    switch (detailData.type) {
      case "Issue":
        return "red";
      case "Task":
        return "gray";
      default:
        return "green";
    }
  };

  const editButton = () => {
    setEdit(!edit);
    if (edit) {
      document.getElementById("detailsCard").setAttribute("hidden", "");
      document.getElementById("editCard").removeAttribute("hidden");
      document.getElementById("editButtonCard").innerHTML = "Save";
      document.getElementById("editableTitle").value = detailData.title;
      document.getElementById("editableDescription").value =
        detailData.description;
      // test
      {
        console.log(detailData);
      }
    } else {
      document.getElementById("editCard").setAttribute("hidden", "");
      document.getElementById("detailsCard").removeAttribute("hidden");
      document.getElementById("editButtonCard").innerHTML = "Edit";

      const newData = {
        title: document.getElementById("editableTitle").value,
        type: document.getElementById("editableType").value,
        user: document.getElementById("editableUser").value,
        sprint: document.getElementById("editableSprint").value,
        project:document.getElementById("editableProject").value,
        description: document.getElementById("editableDescription").value,
        times: null,
        estimate:  document.getElementById("editableEstimate").value,
        spendTime: document.getElementById("editableSpendTime").value,
        storyPoints: document.getElementById("editableStoryPoints").value,
      };
      //test
      {
        console.log(newData);
      }
    }
  };

  return (
    <>
      {/* Static Card*/}
      <Drawer.Body>
        <div id="detailsCard">
          <div>
            {/* Item type*/}
            <Tag size="lg" color={checktype()}>
              {detailData.type}
            </Tag>
            {/* Story Points*/}
            <Tag size="lg" color="blue">
              {detailData.storyPoints}
            </Tag>
            <strong>
              <span
                style={{
                  fontSize: "1.2rem",
                  float: "right",
                  color: "green",
                }}
              >
                {/* Sprint*/}
                {detailData.sprint}
                <span style={{ color: "#1a2336" }}>({detailData.project})</span>
              </span>
            </strong>
          </div>
          <br />
          {/* Description*/}
          <div style={{ height: "4.5rem", marginTop: "1rem" }}>
            <strong style={{ fontSize: "1.2rem" }}>Description: </strong>
            <br />
            <span>{detailData.description}</span>
          </div>
          <br />
          {/* Time Line*/}
          <div style={{ marginTop: "1.5rem" }}>
            <strong style={{ fontSize: "1.2rem" }}>History: </strong>
            <Timeline style={{ marginTop: "1.5rem" }}>
              {Object.values(detailData.times)
                .slice(0, 4)
                .map((time) => {
                  return (
                    <>
                      <Timeline.Item>{time}</Timeline.Item>
                    </>
                  );
                })}
            </Timeline>
          </div>
          {/* Time Points*/}
          <div style={{ width: 500, marginLeft: "1rem", marginTop: "3rem" }}>
            <Progress.Line
              showInfo={false}
              percent={percent}
              strokeColor={color}
              status={status}
            />
            <span style={{ fontSize: "1rem" }}>
              {/* Spend Time*/}
              <strong>Spend:</strong> {detailData.spendTime} hrs
            </span>
            <span style={{ marginLeft: "300px", fontSize: "1rem" }}>
              {/* Etimate Time*/}
              <strong>Estimate:</strong> {detailData.estimate} hrs
            </span>
            <div style={{ width: 160, marginTop: "40px" }}></div>
          </div>
        </div>

        {/*********Edit Card*********/}
        <div id="editCard" hidden>
          {/* Title*/}
          <InputGroup style={{ width: 400, marginTop: -10 }}>
            <InputGroup.Addon>Title</InputGroup.Addon>
            <Input id="editableTitle" />
          </InputGroup>

          {/*Item Type*/}
          <InputGroup style={{ width: 250, marginTop: "1rem" }}>
            <InputGroup.Addon>Item Type</InputGroup.Addon>
            <InputPicker
              id="editableType"
              data={typeTemp}
              placeholder={detailData.type}
            />
          </InputGroup>

          {/*User*/}
          <InputGroup style={{ width: 250, marginTop: "1rem" }}>
            <InputGroup.Addon>User</InputGroup.Addon>
            <InputPicker
              id="editableUser"
              data={userstemp}
              placeholder={detailData.user}
            />
          </InputGroup>

          {/* Description */}
          <h5 placement="auto" visible style={{ marginTop: "1rem" }}>
            Description
          </h5>
          <Input as="textarea" id="editableDescription" rows={5} />

          <div style={{ width: 250, marginTop: "1rem" }}>
            {/*Sprint*/}
            <InputGroup style={{ marginTop: "1rem" }}>
              <InputGroup.Addon>Sprint</InputGroup.Addon>
              <InputPicker
                id="editableSprint"
                data={sprintTemp}
                style={{ width: 224 }}
                placeholder={detailData.sprint}
              />
            </InputGroup>
            {/*Porject*/}
            <InputGroup style={{ marginTop: "1rem" }}>
              <InputGroup.Addon>Project</InputGroup.Addon>
              <InputPicker
                id="editableProject"
                prefix="Project"
                data={projectTemp}
                style={{ width: 224 }}
                placeholder={detailData.project}
              />
            </InputGroup>
            {/*Story Points*/}
            <InputNumber
              id="editableStoryPoints"
              prefix="Story Points"
              defaultValue={detailData.storyPoints}
              max={10}
              min={1}
              style={{ marginTop: "1rem" }}
            />
            {/*Estimate*/}
            <InputNumber
              id="editableEstimate"
              prefix="Estim. Time"
              postfix="hrs"
              defaultValue={detailData.estimate}
              min={1}
              style={{ marginTop: "1rem" }}
            />
            {/*Spend Time*/}
            <InputNumber
              id="editableSpendTime"
              prefix="Spend Time"
              postfix="hrs"
              defaultValue={detailData.spendTime}
              min={1}
              style={{ marginTop: "1rem" }}
            />
          </div>
        </div>

        <Button
          id="editButtonCard"
          style={{
            width: 160,
            marginLeft: "10rem",
            marginTop: "2rem",
          }}
          appearance="primary"
          onClick={editButton}
        >
          Edit
        </Button>
      </Drawer.Body>
    </>
  );
};

export default DetailCard;
