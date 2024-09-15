import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { LoginForm } from "../../CommonFunction";
import { useHeader } from "../../Context/HeaderContext";


export const Form = ({
  formFields,
  handleSubmit,
  setFormData,
  formData
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const {formTitle} = useHeader();

  return (
    <LoginForm>
      <Typography
        variant="h5"
        component="div"
        style={{ color: "black", fontWeight: "bolder" }}
      >
        {formTitle}
      </Typography>
      {formFields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          value={formData[field.name]}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: "10px" }}
        onClick={handleSubmit}
      >
        {formTitle}
      </Button>
    </LoginForm>
  );
};
