import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import "../components/styles/EditSample.css";
import { synth, guitar, toneTransport } from "../data/instruments.js";
import { useState, useEffect } from "react";

function Bar({ barID, barEnabled, handleBarClick }) {
  function barSelected() {
    if (barEnabled) {
      return "selected";
    }
    return "";
  }

  return (
    <div
      className={`bar bar-${barID} ${barSelected()}`}
      onClick={handleBarClick}
    ></div>
  );
}

function Bars({ sequence, setSequence, toneObject }) {
  function sortSequence(bar, otherBar) {
    if (bar.barID < otherBar.barID) {
      return -1;
    }
    if (bar.barID > otherBar.barID) {
      return 1;
    }
    return 0;
  }

  function handleBarClick(bar) {
    const now = toneObject.now();
    guitar.triggerAttackRelease("C3", "8n", now);
    let filteredSequence = sequence.filter((_bar) => _bar.barID !== bar.barID);
    setSequence([...filteredSequence, { ...bar, barEnabled: !bar.barEnabled }]);
  }

  return sequence
    .sort(sortSequence)
    .map((bar) => (
      <Bar
        key={bar.barID}
        {...bar}
        handleBarClick={() => handleBarClick(bar)}
      />
    ));
}

function Preview({ previewing, setPreviewing, toneObject, toneTransport }) {
  function handleButtonClick() {
    toneObject.start();
    toneTransport.stop();

    if (previewing) {
      setPreviewing(false);
      console.log("Preview stopped manually.");
    } else {
      setPreviewing(true);
      console.log("Preview started.");
      toneTransport.start();
    }
  }

  return (
    <button onClick={handleButtonClick}>
      {previewing ? "Stop Previewing" : "Preview"}
    </button>
  );
}

function Sequencer({ toneObject, toneTransport, tonePart }) {
  const initialSequence = [];
  for (let bar = 1; bar <= 16; bar++) {
    initialSequence.push({
      barID: bar,
      barEnabled: false,
      // barEnabled: bar % 2 == 1 ? true : false, // Pre-fill every second bar for testing
    });
  }
  const [sequence, setSequence] = useState(initialSequence);

  const initialPreviewing = false;
  const [previewing, setPreviewing] = useState(initialPreviewing);

  useEffect(() => {
    tonePart.clear();
    toneTransport.cancel();

    sequence
      .filter((bar) => bar.barEnabled)
      .forEach((bar) => {
        tonePart.add((bar.barID - 1) / 2, "C3"); // Plays a note on 3rd octave 0.5s apart
      });

    toneTransport.schedule((time) => {
      setPreviewing(false);
      console.log("Preview stopped automatically.");
    }, 16 / 4);
  });

  return (
    <>
      <div className="sequencer">
        <Bars
          sequence={sequence}
          setSequence={setSequence}
          toneObject={toneObject}
        />
      </div>
      <p>
        <Preview
          previewing={previewing}
          setPreviewing={setPreviewing}
          toneObject={toneObject}
          toneTransport={toneTransport}
        />
      </p>
    </>
  );
}

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
      <div>
        <Sequencer
          toneObject={toneObject}
          toneTransport={toneTransport}
          tonePart={tonePart}
        />
      </div>
    </Template>
  );
}
