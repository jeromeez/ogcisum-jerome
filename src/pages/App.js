// import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import CreateBtn from "../components/CreateBtn";
import Template from "../components/Template";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <Template title="Samples You've Created">
      <Cards></Cards>
      <CreateBtn></CreateBtn>
    </Template>
  );
}
