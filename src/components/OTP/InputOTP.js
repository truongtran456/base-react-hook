import { useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";

const InputOTP = (props) => {
  const [otp, setOtp] = useState("");
  //otp bien tu dat
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp); //truyền otp vào biến setUserOTPParent này ở class cha OTP.js
  };

  const handleConfirmOTP = () => {
    props.handleSubmitOTP(); //goi qua ham o class cha
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
      <div className="timer">
        <CountDown setIsDisableBtn={props.setIsDisableBtn} />
      </div>
      <div className="action">
        <button className="clear">Clear</button>
        <button
          className="confirm"
          disabled={props.isDisableBtn} //kh cho an confirm khi endtime
          onClick={() => handleConfirmOTP()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
