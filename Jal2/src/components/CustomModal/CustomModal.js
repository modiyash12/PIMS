import React from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = ({ children, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      disableBackdropClick
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: "background.paper",
          border: "2px solid #0077be",
          boxShadow: 24,
          p: 5,
          width: "400px",
          borderRadius: "10px",
          backgroundImage: "url(../../assests/sea-water-2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 6, right: 6 }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
