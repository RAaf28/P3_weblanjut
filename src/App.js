import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [hariPuasa, setHariPuasa] = useState(0);

  const title = hariPuasa === 0 ? "Sudah puasa berapa hari" : `Sudah puasa ${hariPuasa} Hari`;
  const description = hariPuasa === 0 ? "sudah mokel belum?" : `semangat kurang ${30 - hariPuasa} hari lagi`;

  const handleButtonClick = () => {
    setHariPuasa(hariPuasa + 1);
  };

  return (
    <div className="App">
      <h1>Selamat Datang!</h1>
      <h2>Hari: {hariPuasa}</h2>
      <div className="button-container">
        <Button text="Tambah" onClick={handleButtonClick} />
      </div>
      <Card title={title} description={description} />
    </div>
  );
}
export default App;



