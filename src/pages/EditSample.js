import React from "react";
import Template from "../components/Template";

export default function EditSample() {
  return (
    <Template title="Editing This Sample:">
      <div>
        <form>
          <input type="text"></input>
          <div>Preview</div>
          <div>Save</div>
        </form>
      </div>
    </Template>
  );
}
