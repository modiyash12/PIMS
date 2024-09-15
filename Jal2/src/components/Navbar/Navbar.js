import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import CustomModal from '../CustomModal/CustomModal';
import Login from '../Login/Login';
import { useHeader } from '../../Context/HeaderContext';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const { title } = useHeader();

  const handleOpen = (title) => {
    setModalTitle(title);
    setOpen(true);
  };

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'linear-gradient(to right, #f0f0f0, #dcdcdc)', 
          minHeight: '40px',  
          boxShadow: 'none', 
        }}
      >
        <Toolbar sx={{ minHeight: '40px', padding: '0 16px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              onClick={() => handleOpen('Admin Login')} 
              sx={{ color: '#333' }} 
            >
              Admin Login
            </Button>
            <Button 
              onClick={() => handleOpen('User Login')} 
              sx={{ color: '#333' }} 
            >
              User Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <CustomModal open={open} setOpen={setOpen}>
        <Login title={modalTitle} setOpen={setOpen} />
      </CustomModal>
    </>
  );
};
