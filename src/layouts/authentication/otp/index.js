/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

//firebase

import { auth } from "../../../firebase/firebaseConfig";

//Component

import OtpInput from "react-otp-input";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/manhattan.jpg";

//Alerts

import Alert from "components/alert";

function Otp() {
  //alerts

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
    icon: "",
  });

  const showAlert = (show = false, type = "", icon = "", msg = "") => {
    setAlert({ show, type, icon, msg });
  };

  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //generate otp

  const Otps = Math.floor(1000 + Math.random() * 9000);

  console.log(Otps)

  const [otp, setOtp] = useState(Otps);

  const navigate = useNavigate();

  const verify = (e) => {
    e.preventDefault();

    if ((otp.length < 4)||(otp.length == '')) {
      
    showAlert(true, 'danger', 'info-circle', 'You have entered incorrect code')
     
    } else {

      navigate("/dashboard", { replace: true });

    }
  };

  return (
    <CoverLayout title="Verification Code" image={curved9} mt={5}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}

      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Code sent to {auth.currentUser.email}
            </SoftTypography>
          </SoftBox>

          <OtpInput
            style={{
              height: "50px",
            }}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            placeholder="1234"
            inputStyle={{
              height: "50px",
              width: "50px",
              border: "1px solid lightgray",
              borderRadius: "4px",
              outline: "none",
            }}
            renderSeparator={<span>&nbsp;&nbsp;</span>}
            renderInput={(props) => <input ml={1} {...props} />}
          />
        </SoftBox>

        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>

        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography
              component={Link}
              to="/authentication/sign-in"
              variant="gradient"
              color="info"
              fontWeight="bold"
              textGradient
            >
              Resend OTP
            </SoftTypography>
          </SoftTypography>
        </SoftBox>

        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={verify}>
            verify
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default Otp;
