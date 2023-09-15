import { useState, useRef } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";
import CountdownAnimation from "./CountdownAnimation";

const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState("");
  //otp bien tu dat
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp); //truyền otp vào setUserOTPParent này ở class cha OTP.js xem co === value tu generateOTP khong
  };

  //ham ktra khi an nut confirm => dung hay sai
  const handleConfirmOTP = () => {
    props.handleSubmitOTP(); //goi qua ham o class cha
  };
  //clear
  const handleClearBtn = () => {
    childRef.current.restTimer();
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
        {/* <CountDown setIsDisableBtn={props.setIsDisableBtn} /> */}
        <CountdownAnimation
          setIsDisableBtn={props.setIsDisableBtn}
          ref={childRef}
        />
      </div>
      <div className="action">
        <button
          className="clear"
          onClick={() => handleClearBtn()}
          disabled={!props.isDisableBtn} //kh cho an clear khi dang chay
        >
          Clear
        </button>
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
