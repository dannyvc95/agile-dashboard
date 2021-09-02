import React, { useState } from "react";
import { Row, Button } from "rsuite";
import Card from "./Card";

const Cards = () => {

  const usertemp = {
    title: "Save the world",
    type: "Issue",
    user: "sasuke.uchiha@konoha.com",
    sprint: "In the next war",
    description: "Save Konoha Village of the inminent atttack, according to the information Orochimaru is comming from Nort, we will sent Naruto and Sakura in that direcion, but you need to be in the West just to be sure.",
    times: {
      0: "13/02 Itachi attack Konoha",
      1: "15/02 Sasuke attack Naruto",
      2: "17/02 Naruto run away to find Sasuke",
      3: "21/02 Sasuke now is friend of Orochimaru"
    }
  };

  const array= [usertemp,usertemp,usertemp,usertemp,usertemp,usertemp,usertemp,usertemp,usertemp];

  return (
    <>
      <br/>
      <br/>
      <Row>
        {array.map((cardData) => {
          return (
              <Card data={cardData} />
          );
        })}
      </Row>
    </>
  );
};

export default Cards;
