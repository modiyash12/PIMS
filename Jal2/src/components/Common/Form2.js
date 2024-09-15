import React from "react";
import {
  InputLabel,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Box,
  Button,
} from "@mui/material";
import { renderRequiredIndicator } from "../../CommonFunction";

const inputStyles = {
  borderRadius: "4px",
  height: "30px ",
};

const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginTop: "20px",
};

const buttonStyle = {
  width: "100px !important",
};

export const Form2 = ({
  state,
  setState,
  handleSubmit,
  fieldData,
  getMenuOptions,
}) => {


  const handleInputChange = (name, value) => {
    setState((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setState({});
  };

  return (
    <>
      <Grid container spacing={2}>
        {fieldData?.map((item) => (
          <Grid item xs={12} sm={item.size} key={item.id}>
            <InputLabel className="inputLabel">
              {item.title}
              {renderRequiredIndicator(item.required)}
            </InputLabel>
            {item.type === "input" ? (
              <TextField
                fullWidth
                InputProps={{ style: inputStyles }}
                name={item.name}
                type={item.fieldType}
                onChange={(e) => handleInputChange(item.name, e.target.value)}
                value={state[item.name] || ""}
                required={item.required}
                placeholder={item.placeHolder}
                autoComplete="off"
              />
            ) : (
              <FormControl fullWidth size="small">
                <Select
                  name={item.name}
                  sx={inputStyles}
                  onChange={(e) => handleInputChange(item.name, e.target.value)}
                  value={state[item.name] || ""}
                >
                  {getMenuOptions(item.name)?.map((option) => (
                    <MenuItem value={option.value} key={option.value}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Grid>
        ))}
      </Grid>
      <Box sx={buttonContainerStyles}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={buttonStyle}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClear}
          sx={buttonStyle}
        >
          Clear
        </Button>
      </Box>
    </>
  );
};
