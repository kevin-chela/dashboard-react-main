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

import { useState, useEffect } from "react";

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard Materail-UI example components
// import Table from "examples/Tables/Table";

// Data
// import data from "layouts/dashboard/components/Orders/data";

import orderList from "../../../../data/order";

import {

  //Table

  MDBTable,
  MDBTableHead,
  MDBTableBody,

} from 'mdb-react-ui-kit';
  

function Orders() {

  console.log(orderList)

  const [data1, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kevin-chela.github.io/manhattan_desert_api/list_orders.json'); 
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data1);

  // const { columns, rows } = data();

  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="sm"
          cover
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
             
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
            Orders
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0} mt={3}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>1130 orders</strong> this month
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={-1.5}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu}
      </SoftBox>
      <SoftBox
        style={{overflowX: 'scroll'}}
        p={3}
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >

        <MDBTable align="middle" style={{marginLeft: '50', marginRight: '50', overflow: 'scroll'}}>
        <MDBTableHead>
        <tr>
            <th scope="col">Client</th>
            <th scope="col">Orders</th>
            <th scope="col">Price</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody style={{marginLeft: '150'}}>

        {orderList.map((list) => (<>
  
            <tr key={list.key}>
            <td>
                <div className="d-flex align-items-center">
               
                    <img
                    src={list.client_Profile}
                    alt="Default user icon"
                    style={{
                        cursor: 'pointer',
                        height: '45px',
                        width: '45px',
                        borderRadius: '50%',
                    }}
                    />
                
                <div className="ms-3">
                    <p className="fw-bold mb-1">{list.client_Email}</p>
                </div>
                </div>
            </td>

            <td>
            <SoftBox display="flex" py={1}>
              {avatars([
                [list.img1, "Order1"],
                [list.img2, "Order2"],
                [list.img3, "Order3"],
                [list.img4, "Order4"],
                [list.img5, "Order5"],
              ])}
            </SoftBox>
            </td>

            <td>
                <p className="fw-normal mb-1">${list.total_price}</p>
            </td>

          </tr>

           </> 
        ))}
        
        
        </MDBTableBody>
        </MDBTable>


      </SoftBox>
    </Card>
  );
}

export default Orders;
