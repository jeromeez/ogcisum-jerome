import React from "react";
import "./styles/Input.css";

export default function Input({ samples }) {
  return (
    <div className="input-wrap">
      <input type="input" className="input-field">
        {samples?.name}
      </input>
      <div className="buttons">
        <div className="preview-btn">Preview</div>
        <div className="save-btn">Save</div>
      </div>
    </div>
  );
}
