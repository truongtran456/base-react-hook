import { useState } from "react";
import OtpInput from "react-otp-input";

const InputOTP = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className="input-otp-container">
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    </div>
  );
};

export default InputOTP;
