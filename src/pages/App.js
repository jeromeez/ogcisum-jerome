// import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import CreateBtn from "../components/CreateBtn";
import Template from "../components/Template";
import { useState, useEffect } from "react";
import { getSample } from "../data/fetch";

export default function App() {
  const [sampleName, setName] = useState();

  useEffect(() => {
    getSample(setName);
    if (sampleName) {
      console.log(sampleName);
      localStorage.setItem("samples", JSON.stringify(sampleName));
    }
  }, [sampleName]);

  return (
    <Template title="Samples You've Created">
      <div>
        {sampleName?.map((dat) => (
          <Cards samples={dat} />
        ))}
      </div>
      {/* <Cards></Cards> */}
      <CreateBtn></CreateBtn>
    </Template>
  );
}
