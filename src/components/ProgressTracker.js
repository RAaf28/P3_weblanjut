import React from "react";
import Button from "./Button";

const ProgressTracker = ({ hariPuasa, targetHari, onReset }) => {
  const progress = Math.min((hariPuasa / targetHari) * 100, 100);
  const sisaHari = Math.max(targetHari - hariPuasa, 0);

  const statusText =
    hariPuasa === 0
      ? "Ayo mulai puasanya hari ini"
      : sisaHari === 0
      ? "MasyaAllah, target puasa sudah tercapai"
      : `Bagus, tinggal ${sisaHari} hari lagi menuju target`;

  return (
    <div className="progress-wrapper">
      <h3>Progress Puasa</h3>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p>{Math.round(progress)}% dari target {targetHari} hari</p>
      <p>{statusText}</p>
      {hariPuasa > 0 && (
        <Button text="Reset Hitungan" onClick={onReset} />
      )}
    </div>
  );
};

export default ProgressTracker;
