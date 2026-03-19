import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ProgressTracker from "./components/ProgressTracker";
import "./App.css";

function App() {
  const [hariPuasa, setHariPuasa] = useState(0);

  const title = hariPuasa === 0 ? "Sudah puasa berapa hari" : `Sudah puasa ${hariPuasa} Hari`;
  const description = hariPuasa === 0 ? "sudah mokel belum?" : `semangat kurang ${30 - hariPuasa} hari lagi`;

  const handleButtonClick = () => {
    setHariPuasa((prev) => prev + 1);
  };

  const handleReset = () => {
    setHariPuasa(0);
  };

  return (
    <div className="App">
      <h1>Selamat Datang!</h1>
      <h2>Hari: {hariPuasa}</h2>
      <div className="button-container">
        <Button text="Tambah Hari Puasa" onClick={handleButtonClick} />
      </div>
      <Card title={title} description={description} />
      <ProgressTracker hariPuasa={hariPuasa} targetHari={30} onReset={handleReset} />
    </div>
  );
}
export default App;



