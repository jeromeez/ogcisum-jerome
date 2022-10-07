import React from "react";
import { useState, useEffect } from "react";
import { horn, guitar, piano, drums } from "../data/instruments.js";

function Bar({ barID, barEnabled, handleBarClick }) {

    function barSelected() {
        if (barEnabled) {
            return "selected";
        }
        return "";
    }

    return (
        <div className={`bar bar-${barID} ${barSelected()}`} onClick={handleBarClick}>
        </div>
    );

}

function Bars({ noteBar, sequence, setSequence, toneObject }) {

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
        guitar.triggerAttackRelease(noteBar, "8n", now);
        let filteredSequence = sequence.filter((_bar) => _bar.barID !== bar.barID);
        setSequence([ ...filteredSequence, { ...bar, barEnabled: !bar.barEnabled } ]);
    }

    return sequence.sort(sortSequence).map(bar => <Bar key={bar.barID} {...bar} handleBarClick={() => handleBarClick(bar)} />);

}

function Preview({ previewing, setPreviewing, toneObject, toneTransport }) {

    function handleButtonClick() {

        toneObject.start();
        toneTransport.stop();

        if(previewing) {
            setPreviewing(false);
            console.log("Preview stopped manually.");
        }
        else {
            setPreviewing(true);
            console.log("Preview started.");
            toneTransport.start();
        }

    }

    return <button onClick={handleButtonClick}>{previewing ? "Stop Previewing" : "Preview"}</button>;

}

export default function Sequencer({ noteBar, toneObject, toneTransport, tonePart }) {

    const initialSequence = [];
    for(let bar = 1; bar <= 16; bar++) {
        initialSequence.push({
            barID: bar,
            barEnabled: false,
            //barEnabled: bar % 2 == 1 ? true : false, // Pre-fill every second bar for testing
        });
    }
    const [sequence, setSequence] = useState(initialSequence);

    const initialPreviewing = false;
    const [previewing, setPreviewing] = useState(initialPreviewing);

    useEffect(() => {

        tonePart.clear();
        toneTransport.cancel();

        sequence.filter(bar => bar.barEnabled).forEach(bar => {
            tonePart.add((bar.barID - 1) / 4, "C3"); // Plays an C note on 3rd octave 0.25s apart
        });

        toneTransport.schedule(time => {
            setPreviewing(false);
            console.log("Preview stopped automatically.");
        }, 16/4);

    });

    return (
        <>
            <div className="sequencer">
                <Bars noteBar={noteBar} sequence={sequence} setSequence={setSequence} toneObject={toneObject} />
            </div>
        </>
    );

}


