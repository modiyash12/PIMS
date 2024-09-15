import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ViewProgressDetails = ({ openDialog, setOpenDialog, viewData }) => {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
      <DialogTitle>
        Project Details
        <IconButton
          aria-label="close"
          onClick={() => setOpenDialog(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent dividers>
        {viewData ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1"><strong>Agreement No/Date:</strong> {viewData.agreementNoDate}</Typography>
              <Typography variant="body1"><strong>Project Name:</strong> {viewData.projectName}</Typography>
              <Typography variant="body1"><strong>District:</strong> {viewData.district}</Typography>
              <Typography variant="body1"><strong>No. of Villages:</strong> {viewData.noOfVillages}</Typography>
              <Typography variant="body1"><strong>Source:</strong> {viewData.source}</Typography>
              <Typography variant="body1"><strong>Capacity of Water Treatment Plant:</strong> {viewData.capacityOfWaterTreatmentPlant}</Typography>
              <Typography variant="body1"><strong>Project Population:</strong> {viewData.projectPopulation}</Typography>
              <Typography variant="body1"><strong>No. of Households:</strong> {viewData.noOfHousehold}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><strong>Project Cost:</strong> {viewData.projectCost}</Typography>
              <Typography variant="body1"><strong>Cost After Variation:</strong> {viewData.projectCostAfterVariation}</Typography>
              <Typography variant="body1"><strong>Funding Agency:</strong> {viewData.fundingAgency}</Typography>
              <Typography variant="body1"><strong>Project Duration:</strong> {viewData.projectDuration} days</Typography>
              <Typography variant="body1"><strong>Start Date:</strong> {viewData.projectStartDate}</Typography>
              <Typography variant="body1"><strong>Completion Date:</strong> {viewData.projectCompletionDate}</Typography>
              <Typography variant="body1"><strong>Expected Completion:</strong> {viewData.expectedCompletionDate}</Typography>
              <Typography variant="body1"><strong>Status:</strong> {viewData.projectStatus}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><strong>Agency Name:</strong> {viewData.agencyName}</Typography>
              <Typography variant="body1"><strong>Manager Name:</strong> {viewData.managerName}</Typography>
              <Typography variant="body1"><strong>Manager Contact:</strong> {viewData.managerContact}</Typography>
              <Typography variant="body1"><strong>Financial Progress:</strong> {viewData.financialProgress}%</Typography>
              <Typography variant="body1"><strong>Physical Progress:</strong> {viewData.physicalProgress}%</Typography>
              <Typography variant="body1"><strong>Water Supply Start Date:</strong> {viewData.waterSupplyStartDate}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1"><strong>PIU:</strong> {viewData.piu}</Typography>
            </Grid>
          </Grid>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
