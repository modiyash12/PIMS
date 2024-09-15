import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

export const ChangePassword = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameSubmit = () => {
    // Mock username validation (replace with actual validation logic)
    if (username === 'validUsername') {
      setStep(2);
      setError('');
    } else {
      setError('Invalid username');
    }
  };

  const handlePasswordChange = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!captchaVerified) {
      setError('Please verify the CAPTCHA');
    } else {
      setError('');
      // Handle password change logic
      console.log('Password changed successfully');
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, textAlign: 'center' }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5">Change Password</Typography>
      {step === 1 && (
        <>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button variant="contained" onClick={handleUsernameSubmit}>
            Validate Username
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm New Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ReCAPTCHA sitekey="your-site-key" onChange={onCaptchaChange} />
          <Button variant="contained" onClick={handlePasswordChange}>
            Change Password
          </Button>
        </>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

