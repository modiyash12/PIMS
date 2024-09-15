import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../Context/HeaderContext";
import { SessionContext } from "../../Context/SessionContext";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const TitleSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        marginBottom: "20px",
      }}
    >
      <img
        src="../../assests/ashok-stambh.png"
        alt="Jal Jeevan Logo"
        style={{ width: "50px", marginRight: "15px" }}
      />
      <Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bolder", whiteSpace: "nowrap" }}
        >
          Jal Rekha
        </Typography>
        <Typography
          variant="h7"
          component="div"
          sx={{
            marginTop: "10px",
            maxWidth: "300px",
            whiteSpace: "normal",
          }}
        >
          Madhya Pradesh Jal Nigam Maryadit Public Health Engineering Department
        </Typography>
        <Divider sx={{ marginY: "10px", backgroundColor: "white" }} />
        <Typography align="center">Government of Madhya Pradesh</Typography>
      </Box>
    </Box>
  );
};

const LoginForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  background: "linear-gradient(135deg, #1e90ff, #00bfff)",
  borderRadius: "12px",
  boxShadow: "0 8px 10px rgba(0, 0, 4, 0.1)",
  color: "white",
});

const StyledTextField = styled(TextField)({
  borderRadius: "12px",
  backgroundColor: "white",
});

const Login = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loginType, setLoginType] = useState("user");
  const { login } = useContext(SessionContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    if (response.ok) {
      login(data.token,data.role,data.piuCode)
      navigate("/dashboard");
      setOpen(false);
    } else {
      console.error("Login failed:", data);
    }
  };
  

  const handleLoginTypeChange = (event, newLoginType) => {
    if (newLoginType !== null) {
      setLoginType(newLoginType);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <LoginForm>
        <TitleSection />
        <ToggleButtonGroup
          value={loginType}
          exclusive
          onChange={handleLoginTypeChange}
          aria-label="login type"
          sx={{ marginBottom: "20px" }}
        >
          <ToggleButton
            value="user"
            aria-label="user login"
            sx={{ color: "white" }}
          >
            User Login
          </ToggleButton>
          <ToggleButton
            value="admin"
            aria-label="admin login"
            sx={{ color: "white" }}
          >
            Admin Login
          </ToggleButton>
        </ToggleButtonGroup>

        <StyledTextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          onChange={handleChange}
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="password"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          {loginType === "admin" ? "Admin Login" : "User Login"}
        </Button>

        {loginType !== "admin" && (
          <Link
            href="#"
            variant="body2"
            sx={{ marginTop: "10px", color: "white" }}
          >
            Forgot Password?
          </Link>
        )}
      </LoginForm>
    </StyledModal>
  );
};

export default Login;
