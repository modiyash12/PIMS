import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useHeader } from '../../Context/HeaderContext';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 2,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ccc',
  paddingBottom: '4px',
  marginBottom: '20px',
};

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
};

export default function CustomModalForm({ open, onClose, title, icon, children }) {
  const {formTitle} = useHeader();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={headerStyle}>
          <Box sx={titleStyle}>
            {icon && (
              <Box sx={{ marginRight: '8px',marginTop:'4px' }}>
                {icon}
              </Box>
            )}
            <Typography id="custom-modal-title" variant="h6" component="h2">
              {formTitle}
            </Typography>
          </Box>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
}
