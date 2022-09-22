import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="card">
      <div className="title">
        <h2 className="card-title">Hellz Wind Staff</h2>
        <p className="card-date">6:40pm on 25 August 2022</p>
      </div>
      <div className="buttons">
        <div className="card-button">
          <div className="btn-share">Shared</div>
          <div className="btn-preview">Preview</div>
          <div className="btn-edit">Edit</div>
        </div>
      </div>
    </div>
  );
}
