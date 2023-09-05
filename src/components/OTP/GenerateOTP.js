import { useState } from "react";

const GenerateOTP = () => {
  const [orgOTP, setOrgOTP] = useState("");

  const handleClickBtn = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOTP(otp);
  };
  return (
    <div className="generate-otp-container">
      <button onClick={() => handleClickBtn()}>Generate OTP</button>
      <div>Your OTP: {orgOTP}</div>
    </div>
  );
};

export default GenerateOTP;
