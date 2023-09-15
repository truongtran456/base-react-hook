import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";
import CountdownAnimation from "./CountdownAnimation";

const OTP = () => {
  const [orgOTPParent, setOrgOTPParent] = useState("");
  const [userOTPParent, setUserOTPParent] = useState("");
  const [isDisableBtn, setIsDisableBtn] = useState(false); //end time thi kh cho confirm

  const handleSubmitOTP = () => {
    if (!orgOTPParent) {
      alert("Pelase generate an OTP...");
      return; //nhan ok van chay
    }
    if (!userOTPParent) {
      alert("Pelase enter an OTP...");
      return; //nhan ok van chay
    }
    if (+orgOTPParent === +userOTPParent) {
      alert("Correct OTP");
    } else {
      alert("Wrong OTP");
    }
  };
  return (
    <div className="otp-parent-container">
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setUserOTPParent={setUserOTPParent} //truyen bien nay qua class con
        handleSubmitOTP={handleSubmitOTP} //truyen ham nay qua class con
        isDisableBtn={isDisableBtn}
        setIsDisableBtn={setIsDisableBtn}
      />
    </div>
  );
};
export default OTP;
