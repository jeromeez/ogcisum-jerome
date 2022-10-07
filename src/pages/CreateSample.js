import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import "../components/styles/EditSample.css";
import Sequencer from "../components/Sequencer";
import { useState, useEffect } from "react";

/**
 * This function works to create the sample by using UseState
 * @param {String} toneObject - Item needed for the sequencer
 * @param {String} toneTransport - Item needed for the sequencer
 * @param {String} tonePart - Item needed for the sequencer
 */

export default function CreateSample({ toneObject, toneTransport, tonePart }) {
  const [instrument, setInstrument] = useState("piano");
  const [name, setName] = useState("");
  const [note, setNote] = useState([
    {
      B: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      A: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      G: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      F: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      E: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      D: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      C: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
  ]);
  return (
    <Template title="Create a Sample:">
      <Input
        instrument={instrument}
        note={note}
        setter={setInstrument}
        name={name}
      />
      <div className="tableType">
        <div className="Type">Type</div>
        <div className="PianoType">Piano</div>
        <div className="FrenchType">French Horn</div>
        <div className="GuitarType">Guitar</div>
        <div className="DrumsType">Drums</div>
      </div>

      {/* First row of sequencer */}
      <div className="First-Row">
        <div className="bNote">B</div>
        <Sequencer
          noteBar={"B3"}
          toneObject={toneObject}
          toneTransport={toneTransport}
          tonePart={tonePart}
        />
      </div>
    </Template>
  );
}
