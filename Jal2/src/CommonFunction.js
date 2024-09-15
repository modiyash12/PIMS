import StarIcon from "@mui/icons-material/Star";
import { Box, styled } from "@mui/material";

export const renderRequiredIndicator = (item) => {
    if (item) {
      return <StarIcon sx={{ fontSize: "8px", margin: "3px" }} color="error" />;
    } else {
      return "";
    }
  };


export const LoginForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  background: "#ff",
  borderRadius: "10px",
  boxShadow: "0 8px 10px rgba(0, 0, 4, 0.1)",
  backgroundPosition: "center",
});


export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const base_url="http://localhost:8080/";