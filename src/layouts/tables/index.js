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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftPagination from "components/SoftPagination";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//images
import Profile from "../../assets/images/placeholder.png";

// react-router components
import { Link } from "react-router-dom";

import {

//Table

MDBTable,
MDBTableHead,
MDBTableBody,

} from 'mdb-react-ui-kit';

//Context

import { useGlobalContext } from '../../contextData/context'

function Tables() {

  const { clients } = useGlobalContext()

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>

              <SoftTypography variant="h6">Client Info</SoftTypography>

              <SoftBox>
              <Link to="/authentication/sign-up">
              <SoftButton variant="gradient" color="info">
                register client
              </SoftButton>
              </Link>
            </SoftBox>
            </SoftBox>
            <SoftBox
              style={{overflow: 'auto'}}
              px={3}
              pb={2}
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <MDBTable  className="table-hover" align="middle" style={{marginLeft: '50', marginRight: '50', overflow: 'scroll',
              }}
              >
              <MDBTableHead>
              <tr>
                  <th scope="col" style={{fontSize: '12px', opacity: 0.5}} >CLIENT PROFILE</th>
                  <th scope="col" style={{fontSize: '12px', opacity: 0.5}} >PASSPORT NUMBER</th>
                  <th scope="col" style={{fontSize: '12px', opacity: 0.5}} >CONTACT</th>
                  <th scope="col" style={{fontSize: '12px', opacity: 0.5}} >CITIZEN</th>
                  <th scope="col" style={{fontSize: '12px', opacity: 0.5}} >ACTION</th>
              </tr>
              </MDBTableHead>
              <MDBTableBody style={{marginLeft: '150'}}>

              {clients.map((list) => (<>
        
                  <tr key={list.key}>
                  <td>
                      <div className="d-flex align-items-center">

                      {list.profile_image === "123" ? 
                      
                      <img
                      src={Profile}
                      alt="Default user icon"
                      style={{
                          cursor: 'pointer',
                          height: '45px',
                          width: '45px',
                          borderRadius: '50%',
                      }}
                      /> 
                      : 

                      <img
                      src={list.profile_image}
                      alt="Default user icon"
                      style={{
                          cursor: 'pointer',
                          height: '45px',
                          width: '45px',
                          borderRadius: '50%',
                      }}
                      />

                      } 
                    
                         
                      
                      <div className="ms-3">
                          <p className="fw-bold mb-1">{list.email}</p>
                      </div>
                      </div>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{list.passport_number}</p>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{list.contact}</p>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{list.country_of_birth}</p>
                  </td>

                  <td>
                  <Link to="/authentication/sign-up">
                  <SoftButton variant="gradient" color="success">
                    View Profile
                  </SoftButton>
                  </Link>
                  </td>

                </tr>

                </> 
              ))}
              
              
              </MDBTableBody>

              <SoftPagination>
             
              </SoftPagination>
                
              </MDBTable>

            </SoftBox>
          </Card>
        </SoftBox>
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
