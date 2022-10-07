import React from "react";
import { Link } from "react-router-dom";
import "./styles/CreateBtn.css";

export default function CreateBtn() {
  return (
    <div className="create-sample">
      <Link to="/createsample" className="create-button">
        Create Sample
      </Link>
    </div>
  );
}
