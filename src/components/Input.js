import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div className="input-wrap">
      <input type="input" className="input-field"></input>
      <div className="buttons">
        <div className="preview-btn">Preview</div>
        <div className="save-btn">Save</div>
      </div>
    </div>
  );
}
