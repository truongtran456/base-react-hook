import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";

const OTP = () => {
  return (
    <div className="otp-parent-container">
      <GenerateOTP />
      <InputOTP />
    </div>
  );
};
export default OTP;
