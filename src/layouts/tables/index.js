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
import SoftInput from "components/SoftInput";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//images
import Profile from "../../assets/images/placeholder.png";

// react-router components
import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react';

import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; 

import {

//Table

MDBTable,
MDBTableHead,
MDBTableBody,

} from 'mdb-react-ui-kit';

//Context

import { useGlobalContext } from '../../contextData/context'

function Tables() {

  const { clients } = useGlobalContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [page, setPage] = useState(0);

  const n = 5

  useEffect(() => {
    const results = clients.filter((item, index) => {
     
      return  (item.email.toLowerCase().includes(searchTerm.toLowerCase())) & (index >= page * n) & (index < (page + 1) * n);

    });
    setSearchResults(results);
  }, [clients, searchTerm, page]);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>

              <SoftTypography variant="h6">Client Info</SoftTypography>

              <SoftBox pr={2}>
              <SoftInput
                placeholder="Search email..."
                icon={{ component: "search", direction: "left" }}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              </SoftBox>

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

              {searchResults.map((item, index) => (<>
                 
                
                  <tr key={item.key}>
                  <td>
                      <div className="d-flex align-items-center">

                      {item.profile_image === "123" ? 
                      
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
                      src={item.profile_image}
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
                          <p className="fw-bold mb-1">{item.email}</p>
                      </div>
                      </div>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{item.passport_number}</p>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{item.contact}</p>
                  </td>

                  <td>
                      <p className="fw-normal mb-1">{item.country_of_birth}</p>
                  </td>

                  <td>
           
                  <Link
                    to={{
                      pathname: `/register/details/${item.id}`
                      
                    }}
                  >
                  <SoftButton variant="gradient" color="warning">
                    View Profile
                  </SoftButton>
                  </Link>

                  </td>

                </tr>

              </> 

              ))}
              
              
              </MDBTableBody>
                
              </MDBTable>
              
              <SoftBox mt={4} style={{marginLeft: '40%'}}>
              <ReactPaginate
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              activeClassName={"active"}
              onPageChange={(event) => setPage(event.selected)}
              pageCount={Math.ceil(clients.length / n)}
              breakLabel="..."
              previousLabel={
                <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                  <AiFillLeftCircle />
                </IconContext.Provider>
              }
              nextLabel={
                <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                  <AiFillRightCircle />
                </IconContext.Provider>
              }

            />
              </SoftBox>

             

            </SoftBox>
            
          </Card>
        </SoftBox>
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
