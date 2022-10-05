import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import ToggleButton from "../components/ToggleButton";

export default function EditSample() {
  return (
    <Template title="Editing This Sample:">
      <Input />
      <div>
        <div className="Type">Type</div>
        <ToggleButton></ToggleButton>
        {/* <div className="tableType">
          <div>Piano</div>
          <div>French Horn</div>
          <div>Guitar</div>
          <div>Drums</div>
        </div> */}
      </div>
    </Template>
  );
}
