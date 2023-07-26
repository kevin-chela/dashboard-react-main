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

import { useParams } from 'react-router-dom';

//Context

import { useGlobalContext } from '../../../contextData/context'

//images
import Profile from "../../../assets/images/placeholder.png";


function Details() {

const param = useParams();

const { clients } = useGlobalContext();

const data = clients;

const id = parseInt(param.id);

console.log(id)
 
const filteredData = data.filter((item) => item.id === id);



  const [last, setLast] = useState();
  const [passport, setPassport] = useState();
  const [dob, setDOB] = useState();

  const [profile, setProfile] = useState("123");

  const [citizen, setCitizen] = useState();


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

  const register = () => {
 
    Axios.post("https://dashboard.developers.co.ke/register", JSON.stringify({

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

    }),

    {

      headers:{
        "Content-Type" : "application/json"
      }
     
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.message){

        showAlert(true, 'danger', 'info-circle', `${response.message}`)

      }else{
        
        showAlert(true, 'success', 'check', "Account created successfully")
        console.log(email);

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

    {filteredData.map((item) => (

    <SoftBox key={item.id}>

      <SoftBox className="container-fluid py-4">
      <SoftBox className="row">
        <SoftBox className="col-md-8 mb-5">
          <Card className="card p-3" >
         
            <SoftBox className="card-body">

            <SoftTypography variant="h5" fontWeight="medium">

            Profile Information
        
            </SoftTypography>

            <hr/> 

          {alert.show && <Alert {...alert} removeAlert={showAlert} />}

         
          
           <SoftBox className="row" >

           <SoftBox className="col-md-6">
             <SoftBox>
             <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
               Name
             </SoftTypography>
             <SoftInput
             type="text"
             placeholder="First"
             value={item.first_name} 
             disabled
             // onChange={(e) => setFirst(e.target.value)} 
             />
             </SoftBox>
           </SoftBox>
           <SoftBox className="col-md-6">
           <SoftBox mt={5.5}>
             <SoftInput
             type="text"
             placeholder="Last"
             value={item.last_name} 
             disabled
             // onChange={(e) => setLast(e.target.value)}  
             />
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
             value={item.email} 
             disabled
             // onChange={(e) => setEmail(e.target.value)}
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
             value={item.passport_number} 
             disabled
             //  onChange={(e) => setPassport(e.target.value)} 
             />
             </SoftBox>
           </SoftBox>
           <SoftBox className="col-md-6">
             <SoftBox>
             <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
               Date of Birth
             </SoftTypography>
             
             <SoftInput
             type="text"
             value={item.date_of_birth} 
             disabled
             //  onChange={(e) => setDOB(e.target.value)} 
             />
             </SoftBox>
           </SoftBox>
           <SoftBox className="col-md-6">
             <SoftBox>
             <SoftTypography ml={1} mb={2} component="label" variant="caption" fontWeight="bold">
               Gender
             </SoftTypography>
             <SoftInput
             type="text"
             placeholder="Male"
             value={item.gender} 
             disabled
             //  onChange={(e) => setGender(e.target.value)}
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
              value={item.address} 
              disabled
              // onChange={(e) => setAddress(e.target.value)} 
              />
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
              value={item.contact} 
              disabled
              // onChange={(e) => setContact(e.target.value)}
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
              placeholder="Kenyan"
              value={item.country_of_birth} 
              disabled
              // onChange={(e) => setCitizen(e.target.value)}
              />
              </SoftBox>
            </SoftBox>
            </SoftBox>
       
              &nbsp;

              {alert.show && <Alert {...alert} removeAlert={showAlert} />}

          </SoftBox>

          <SoftBox ml={2} mb={1} alignItems="center" justifyContent="center">
              <SoftButton variant="gradient" color="dark"
                onClick={() => {
                  validate()
                }}>
                Delete Account
              </SoftButton>
            </SoftBox>

          </Card>
        </SoftBox>

        <SoftBox className="col-md-4">
          <Card className="card card-profile">
            <img src={curved7} alt="Image placeholder" className="card-img-top" />
            <SoftBox className="row justify-content-center">
              <SoftBox className="col-4 col-lg-4 order-lg-2">
                <SoftBox className="mt-n4 mt-lg-n6 mb-4 mb-lg-0 ml-lg-5">
                {item.profile_image === "123" ? 
                      
                      <img
                      src={Profile}
                      alt="Default user icon"
                      style={{
                          cursor: 'pointer',
                          height: '100px',
                          width: '100px',
                          borderRadius: '50%',
                          marginTop: '-50px'
                      }}
                     
                      Contact
                    
                      /> 

                      : 

                      <img
                      src={item.profile_image}
                      alt="Default user icon"
                      style={{
                          cursor: 'pointer',
                          height: '100px',
                          width: '100px',
                          borderRadius: '50%',
                          marginTop: '-50px'
                      }}
                      contain
                      />

                      } 
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
              
              <SoftBox className="text-center mt-4">
                <SoftTypography fontWeight="medium" variant="h6" >
                  PROFILE CARD
                </SoftTypography>
                
               
              </SoftBox>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </SoftBox>

  </SoftBox>

))}

<SoftBox className="container-fluid py-4">

<Card className="card p-5" >

<SoftTypography variant="h5" fontWeight="medium">

Client Data

</SoftTypography>

<hr/>

</Card>

</SoftBox>


</BasicLayout>

  );
}

export default Details;
