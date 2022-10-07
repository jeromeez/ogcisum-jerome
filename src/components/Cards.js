import React from "react";
import "./styles/Cards.css";
import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * This function will return in a card component
 * @param {String} samples - The selected ID in the API
 */
export default function Cards({ samples }) {
  const [shared, setShare] = useState(false);
  return (
    <div className="card">
      <div className="title">
        <h2 className="card-title">{samples?.name}</h2>
        <p className="card-date">{samples?.datetime} </p>
      </div>
      <div className="buttons">
        <div className="card-button">
          <div className="btn-share">Share</div>
          <div className="btn-preview">Preview</div>
          <Link to={`/editsample/${samples?.id}`} className="editLink">
            <div className="btn-edit">Edit</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
