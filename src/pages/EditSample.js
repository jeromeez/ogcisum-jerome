import React from "react";
import Template from "../components/Template";
import { getSample } from "../data/fetch";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import "../components/styles/EditSample.css";
import Sequencer from "../components/Sequencer";

export default function EditSample({ toneObject, toneTransport, tonePart }) {
  return (
    <Template title="Editing This Sample:">
      <Input />
      <div className="tableType">
        <div className="Type">Type</div>
        <div className="PianoType">Piano</div>
        <div className="FrenchType">French Horn</div>
        <div className="GuitarType">Guitar</div>
        <div className="DrumsType">Drums</div>
      </div>

      <div className="sequence-row">
        <div className="First-Row">
          <div className="bNote">B</div>
          <Sequencer
            noteBar={"B3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Second-Row">
          <div className="bNote">A</div>
          <Sequencer
            noteBar={"A3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Third-Row">
          <div className="G-Note">G</div>
          <Sequencer
            noteBar={"G3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Fourth-Row">
          <div className="F-Note">F</div>
          <Sequencer
            noteBar={"F3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Fifth-Row">
          <div className="E-Note">E</div>
          <Sequencer
            noteBar={"E3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Sixth-Row">
          <div className="D-Note">D</div>
          <Sequencer
            noteBar={"D3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>

        <div className="Seventh-Row">
          <div className="C-Note">C</div>
          <Sequencer
            noteBar={"C3"}
            toneObject={toneObject}
            toneTransport={toneTransport}
            tonePart={tonePart}
          />
        </div>
      </div>
    </Template>
  );
}
