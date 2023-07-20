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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';

// react-router-dom components
import { useNavigate  } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

//Alerts

import Alert from 'components/alert';

//Loading

import ReactLoading from "react-loading";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/food.jpg";

function SignIn() {

  //alerts

  const [alert, setAlert] = useState({
  show: false,
  msg: '',
  type: '',
  icon: '',
  })

  const showAlert = (show = false, type = '', icon = '', msg = '') => {
  setAlert({ show, type, icon, msg })
  }

  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');
  const [nameError, setNameError] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {

    e.preventDefault();

    if((email.length=="") || (password.length=="")){
      setNameError(true);
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
        console.log(response);

        setLoading(true);

        setTimeout(() => {

          setLoading(false);

          navigate('/authentication/otp', { replace: true })

        }, 3000);
       
    })
    .catch((error) => {
      
      const errorMessage = error.message;

      showAlert(true, 'danger', 'info-circle', (errorMessage))

    });
  
  }


  return (
    <CoverLayout
      title="Welcome back"
      image={curved9}
      
    >

    {alert.show && <Alert {...alert} removeAlert={showAlert} />}

    {loading && <div className='text-center, alignItem: center' style={{position: 'absolute', zIndex: '1000', marginLeft: '120px', marginTop: '180px'}}><ReactLoading
          type="spinningBubbles"
          color="#ADD8E6"
          height={100}
          width={50} 
        /></div> }

      
     
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput 
          type="email" 
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={nameError ? "invalid" : ""} 
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput 
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className={nameError ? "invalid" : ""}
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
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={login}>
            sign in
          </SoftButton>
        </SoftBox>
        {/* <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/otp"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox> */}
      </SoftBox>
    </CoverLayout>
  );
}



export default SignIn;
