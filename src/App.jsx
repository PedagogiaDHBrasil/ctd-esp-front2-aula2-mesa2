import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Input from "./components/Input";
import CharacterList from "./components/CharacterList/index.tsx";

const App = () => {
  const [rickandmorty, setRickandmorty] = useState(0);
  const [rickandmortyData, setRickandmortyData] = useState([]);

  const handleChange = (e) => {
    setRickandmorty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRickandmorty();
  };

  const getRickandmorty = async () => {
    const toArray = [];
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${rickandmorty}`
      );
      toArray.push(res.data);

      setRickandmortyData(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Input handleSubmit={handleSubmit} handleChange={handleChange} />
      <CharacterList rickandmortyData={rickandmortyData} />
    </>
  );
};

export default App;
