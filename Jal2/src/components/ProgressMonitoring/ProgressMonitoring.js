import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { Visibility, Edit, Close } from "@mui/icons-material";
import { projectDetailsData } from "../../UserFormData";
import {
  createProjectDetail,
  getProjectDetailById,
  getProjectDetailByPiu,
  updateDetail,
} from "../../Apis/ProjectDetailsApi";
import { ViewProgressDetails } from "./ViewProgressDetails";

const steps = ["Project Info", "Progress Info"];

const getStepData = (step) => {
  switch (step) {
    case 0:
      return projectDetailsData.slice(0, 12);
    case 1:
      return projectDetailsData.slice(12, 22);
    default:
      return [];
  }
};

export const ProgressMonitoring = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState("Create");
  const [currentUserData, setCurrentUserData] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [viewData, setViewData] = useState(null); 

  const getCurrentUserDetail = async () => {
    const piu = sessionStorage.getItem("piuCode");
    if (piu) {
      try {
        const result = await getProjectDetailByPiu(piu);
        console.log(result)
        if (result.length>0) {
          setCurrentUserData(result);
          setFormData(result.data[0] || []);
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    }
  };

  const handleViewClick = async (id) => {
    console.log(formData)
    try {
      const result = await getProjectDetailById(formData.id);
      if (result) {
        setViewData(result.data);
        setOpenDialog(true); 
      }
    } catch (error) {
      console.error("Error fetching project details by ID:", error);
    }
  };

  useEffect(() => {
    getCurrentUserDetail();
    setFormType("Create");
  }, []);

  useEffect(() => {
    if (currentUserData.length !== 0) {
      setIsDisable(true);
    }
  }, [currentUserData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleEditClick = () => {
    setIsDisable(false);
    setFormType("Update");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const piuCode = sessionStorage.getItem("piuCode");
    const updatedFormData = { ...formData, piu: piuCode };

    if (formType === "Create") {
      const res = await createProjectDetail(updatedFormData);
      if (res) {
        setIsDisable(true);
      }
    } else {
      const res = await updateDetail(updatedFormData.id, updatedFormData);
      if (res) {
        console.log("Project updated successfully:", res);
        setIsDisable(true);
        setFormType("Create");
      }
    }
  };

  return (
    <Paper sx={{ width: "100%", padding: "20px" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Progress Monitoring
        </Typography>

        <Box>
          <IconButton color="primary" aria-label="view" onClick={handleViewClick}             disabled={!isDisable}
          >
            <Visibility />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="edit"
            onClick={handleEditClick}
            disabled={!isDisable}
          >
            <Edit />
          </IconButton>
          {formType === "Update" && (
            <IconButton
              color="secondary"
              aria-label="edit"
              onClick={() => {
                setIsDisable(true);
                setFormType("Create");
              }}
            >
              <Close />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Box sx={{ marginY: 2 }}>
        <Divider />
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {getStepData(activeStep).map((field) => (
            <Grid item xs={12} sm={field.size} key={field.id}>
              {field.type === "input" ? (
                <TextField
                  fullWidth
                  label={field.title}
                  name={field.name}
                  placeholder={
                    field?.fieldType === "date" ? undefined : field?.placeHolder
                  }
                  type={field.fieldType}
                  required={field?.required}
                  onChange={handleChange}
                  value={formData[field?.name] || ""}
                  disabled={isDisable}
                  InputLabelProps={
                    field.fieldType === "date" ? { shrink: true } : {}
                  }
                />
              ) : field.type === "select" ? (
                <Select
                  fullWidth
                  label={field.title}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                  disabled={isDisable}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    {field.placeHolder}
                  </MenuItem>
                  {field.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              ) : null}
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isDisable}
            >
              {formType}
            </Button>
          ) : (
            <Button onClick={handleNext} variant="contained" color="primary">
              Next
            </Button>
          )}
        </Box>
      </form>
      <ViewProgressDetails openDialog={openDialog} setOpenDialog={setOpenDialog} viewData={viewData}/>
    </Paper>
  );
};
