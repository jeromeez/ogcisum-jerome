import React from "react";
import "./styles/Cards.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/*
---------------------------------
Javascript code for creating cards
---------------------------------
*/

export default function Cards() {
  const initialSample = "Loading sample...";
  const [sampleName, setName] = useState(initialSample);
  const [sampleDate, setDate] = useState(initialSample);

  useEffect(() => {
    getName();
  }, []);

  async function getName() {
    const response = await fetch(
      "http://wmp.interaction.courses/api/v1/?apiKey=NQrs4GBt&mode=read&endpoint=samples"
    );
    const json = await response.json();
    const sampleName = json.samples[0].name;
    const sampleDate = json.samples[0].datetime;

    // let time = sampleDate.substr(11, 14);
    console.log(sampleName);
    // console.log(time);
    setName(sampleName);
    setDate(sampleDate);
  }

  return (
    <div className="card">
      <div className="title">
        <h2 className="card-title">{sampleName}</h2>
        <p className="card-date">{sampleDate} </p>
      </div>
      <div className="buttons">
        <div className="card-button">
          <div className="btn-share">Share</div>
          <div className="btn-preview">Preview</div>
          <Link to={`/editsample`} className="editLink">
            <div className="btn-edit">Edit</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
