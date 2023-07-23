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
import Axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import curved6 from "assets/images/bg-profile.jpg";
import curved7 from "assets/images/carousel-3.jpg";
import curved8 from "assets/images/team-2.jpg";

//Alert
import Alert from "components/alert";

function SignUp() {

  const [email, setEmail] = useState("micheal@gmail.com");
  const [first, setFirst] = useState("micheal");
  const [last, setLast] = useState("ochieng");
  const [passport, setPassport] = useState("123456789KL");
  const [dob, setDOB] = useState("1998/07/09");
  const [gender, setGender] = useState("Male");
  const [profile, setProfile] = useState("123");
  const [address, setAddress] = useState("345 Thika Juja");
  const [contact, setContact] = useState("+254712345678");
  const [citizen, setCitizen] = useState("Nigerian");

  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

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

  const data = {

    email: email,
    first: first,
    last: last,
    passport: passport,
    dob: dob,
    gender: gender,
    profile: profile,
    address: address,
    country_of_birth: citizen,
    contact: contact,

  }



  const register = () => {
 
    Axios.post("https://dashboard.developers.co.ke/register", JSON.stringify(data),
    {

      headers:{
        "Content-Type" : "application/json"
      }
     
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){

        showAlert(true, 'danger', 'info-circle', `${response.data.message}`)

      }else{
        
        showAlert(true, 'success', 'check', "Account created successfully")
        console.log(data.email);

      }
    })
    .catch((error) => {
      
      const errorMessage = error.message;

      showAlert(true, 'danger', 'info-circle', (errorMessage))
      console.error(error.response.data);

    });

  }

  const validate = () => {

    if (!first || !last || !email || !passport || !dob ||!gender || !address || !citizen || !contact) {

      showAlert(true, 'danger', 'info-circle', 'All input field are required')

    } else {

      register()

    }

  }

  return (
    <BasicLayout
      title="Welcome"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <SoftBox className="container-fluid py-4">
      <SoftBox className="row">
        <SoftBox className="col-md-8 mb-5">
          <Card className="card p-3" >
         
            <SoftBox className="card-body">

            <SoftTypography variant="h5" fontWeight="medium">
            User Information
            </SoftTypography>

            <hr/>

            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          
              <SoftBox className="row">
                <SoftBox className="col-md-6">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Name
                  </SoftTypography>
                  <SoftInput
                  type="text"
                  placeholder="First"
                  value={first} 
                  onChange={(e) => setFirst(e.target.value)} 
                  />
                  </SoftBox>
                </SoftBox>
                <SoftBox className="col-md-6">
                <SoftBox mt={5.5}>
                  <SoftInput
                  type="text"
                  placeholder="Last"
                  value={last} 
                  onChange={(e) => setLast(e.target.value)}  />
                  </SoftBox>
                </SoftBox>
                <SoftBox className="col-md-6">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Email
                  </SoftTypography>
                  <SoftInput
                  type="text"
                  placeholder="example@gmail.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </SoftBox>
                </SoftBox>
                <SoftBox className="col-md-6">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Passport Number
                  </SoftTypography>
                  <SoftInput
                   type="text"
                   placeholder="AK 7 XX XXX XXX"
                   value={passport} 
                   onChange={(e) => setPassport(e.target.value)} 
                  />
                  </SoftBox>
                </SoftBox>
                <SoftBox className="col-md-6">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Date of Birth
                  </SoftTypography>
                  <SoftInput
                   type="date"
                   value={dob} 
                   onChange={(e) => setDOB(e.target.value)} />
                  </SoftBox>
                </SoftBox>
                <SoftBox className="col-md-6">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Gender
                  </SoftTypography>
                  <SoftInput
                   type="text"
                   placeholder="AK 7 XX XXX XXX"
                   value={gender} 
                   onChange={(e) => setGender(e.target.value)}
                  />
                  </SoftBox>
                </SoftBox>
              </SoftBox>
              
              <SoftTypography mt={3} variant="h5" fontWeight="medium">
                Contact Information
              </SoftTypography>

              <hr className="horizontal dark" />
          
              <SoftBox className="row">
                <SoftBox className="col-md-12">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Address
                  </SoftTypography>
                  <SoftInput
                  type="text"
                  placeholder="Address"
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}  />
                  </SoftBox>
                </SoftBox>
                
                <SoftBox className="col-md-12">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Contact
                  </SoftTypography>
                  <SoftInput
                  type="text"
                  placeholder="+254 7 XX XXX XXX"
                  value={contact} 
                  onChange={(e) => setContact(e.target.value)}
                  />
                  </SoftBox>
                </SoftBox>

                <SoftBox className="col-md-12">
                  <SoftBox>
                  <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
                    Citizenship
                  </SoftTypography>
                  <SoftInput
                  type="text"
                  placeholder="+254 7 XX XXX XXX"
                  value={citizen} 
                  onChange={(e) => setCitizen(e.target.value)}
                   />
                  </SoftBox>
                </SoftBox>
              </SoftBox>

              &nbsp;

              {alert.show && <Alert {...alert} removeAlert={showAlert} />}

              <SoftBox  mt={3}  display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment}/>
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
                color="dark"
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1} alignItems="center" justifyContent="center">
              <SoftButton variant="gradient" color="dark"
                onClick={() => {
                  validate()
                }}>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>

          </Card>
        </SoftBox>

        <SoftBox className="col-md-4">
          <Card className="card card-profile">
            <img src={curved7} alt="Image placeholder" className="card-img-top" />
            <SoftBox className="row justify-content-center">
              <SoftBox className="col-4 col-lg-4 order-lg-2">
                <SoftBox className="mt-n4 mt-lg-n6 mb-4 mb-lg-0 ml-lg-5">
                  <SoftAvatar   size= "xxl" src={curved8} style={{ marginTop: '-70px'}}/>
                </SoftBox>
              </SoftBox>
            </SoftBox>
            <SoftBox className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <SoftBox className="d-flex justify-content-between">
              <SoftButton variant="gradient" color="warning"
                onClick={() => {
                  validate()
                }}>
                connect
              </SoftButton>
                 <SoftButton variant="gradient" color="dark"
                onClick={() => {
                  validate()
                }}>
                message
              </SoftButton>
              </SoftBox>
            </SoftBox>
            <SoftBox className="card-body pt-0">
              <SoftBox className="row">
                <SoftBox className="col">
                  <SoftBox className="d-flex justify-content-center">
                    <SoftBox className="d-grid text-center">
                      <SoftTypography  fontWeight="medium" variant="h6" >22</SoftTypography>
                      <SoftTypography fontWeight="medium" variant="h6" >Clients</SoftTypography>
                    </SoftBox>
                    <SoftBox className="d-grid text-center mx-4">
                      <SoftTypography fontWeight="medium" variant="h6">10</SoftTypography>
                      <SoftTypography fontWeight="medium" variant="h6" >Photos</SoftTypography>
                    </SoftBox>
                    <SoftBox className="d-grid text-center">
                      <SoftTypography fontWeight="medium" variant="h6" >89</SoftTypography>
                      <SoftTypography fontWeight="medium" variant="h6" >Comments</SoftTypography>
                    </SoftBox>
                  </SoftBox>
                </SoftBox>
              </SoftBox>
              <SoftBox className="text-center mt-4">
                <SoftTypography fontWeight="medium" variant="h6" >
                  Mark Davis<SoftTypography fontWeight="medium" variant="h6" > 35</SoftTypography>
                </SoftTypography>
                <SoftTypography fontWeight="medium" variant="h6" mt={2} >
                  <i className="ni location_pin mr-2"></i>Bucharest Romania
                </SoftTypography>
                <SoftTypography fontWeight="medium" variant="h6"  mt={2}>
                  <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </SoftTypography>
                <SoftTypography fontWeight="medium" variant="h6"  mt={2}>
                  <i className="ni education_hat mr-2"></i>University of Computer Science
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </SoftBox>

  </BasicLayout>

  );
}

export default SignUp;
