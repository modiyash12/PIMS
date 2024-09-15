import React, { useState } from "react";
import { Box, Typography} from "@mui/material";
import Login from "../../components/Login/Login"
import "../../common.css";

export const Topbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleMenuOpen = (event) => {
    setOpenModal(true);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "lightblue", padding: "10px" }}
      >
        <img
          src="../../assests/ashok-stambh.png"
          alt="Ashok Stambh"
          style={{ height: "60px", width: "50px" }}
        />
        <Typography variant="h5" component="div" className="header">
          Jal Jeevan Mission - Har Ghar Jal
        </Typography>
        <Box display="flex" alignItems="center">
          <img
            src="../../assests/waterdrop.png"
            alt="Water Drop"
            style={{ height: "50px", width: "50px" }}
            onClick={handleMenuOpen}
          />
        </Box>
      </Box>
      
        <Login open={openModal} setOpen={setOpenModal} />
    </>
  );
};
