import { useState } from "react";
import OtpInput from "react-otp-input";

const InputOTP = () => {
  const [otp, setOtp] = useState("");

  //otp bien tu dat
  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"} //css mấy ô input
      />
      <div className="timer">1:00</div>
      <div className="action">
        <button className="clear">Clear</button>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
};

export default InputOTP;
