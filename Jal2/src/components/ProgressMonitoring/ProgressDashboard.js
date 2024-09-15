import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, LineChart, Line, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    id: 4,
    projectName: "Jal Jeevan",
    projectPopulation: 200000,
    noOfHousehold: 290,
    projectCost: 40000.0,
    financialProgress: 30.0,
    physicalProgress: 20.0,
    projectStatus: "In Progress",
  },
  {
    id: 5,
    projectName: "Jal Jeevan",
    projectPopulation: 89898,
    noOfHousehold: 897,
    projectCost: 7987978.0,
    financialProgress: 30.0,
    physicalProgress: 27.0,
    projectStatus: "In Progress",
  },
  {
    id: 6,
    projectName: "Jal Jeevan",
    projectPopulation: 89898,
    noOfHousehold: 897,
    projectCost: 7987978.0,
    financialProgress: 30.0,
    physicalProgress: 20.0,
    projectStatus: "In Progress",
  },
  {
    id: 7,
    projectName: "Finvi",
    projectPopulation: 400000,
    noOfHousehold: 300,
    projectCost: 3000000.0,
    financialProgress: 30.0,
    physicalProgress: 20.0,
    projectStatus: "In Progress",
  },
];

// Color settings for the cards
const cardColors = ["#FFB6C1", "#ADD8E6", "#98FB98", "#FFD700"];

// Summary Data Calculation
const totalProjects = data.length;
const totalPopulation = data.reduce((acc, project) => acc + project.projectPopulation, 0);
const avgFinancialProgress = (data.reduce((acc, project) => acc + project.financialProgress, 0) / totalProjects).toFixed(2);
const avgPhysicalProgress = (data.reduce((acc, project) => acc + project.physicalProgress, 0) / totalProjects).toFixed(2);

// Colors for the pie chart slices
const COLORS = ['#0088FE', '#FF8042'];

export const ProgressDashboard = () => {
  return (
    <Grid container spacing={3}>
      {/* Detailed Project Cards */}
      {data.map((project, index) => (
        <Grid item xs={12} md={6} lg={3} key={project.id}>
          <Card style={{ backgroundColor: cardColors[index % cardColors.length] }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.projectName}
              </Typography>
              <Typography variant="subtitle1">Population Served: {project.projectPopulation}</Typography>
              <Typography variant="subtitle1">Households: {project.noOfHousehold}</Typography>
              <Typography variant="subtitle1">Project Cost: ${project.projectCost.toLocaleString()}</Typography>
              <Typography variant="subtitle1">Financial Progress: {project.financialProgress}%</Typography>
              <Typography variant="subtitle1">Physical Progress: {project.physicalProgress}%</Typography>
              <Typography variant="subtitle1">Status: {project.projectStatus}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Summary Cards */}
      <Grid item xs={12} md={3}>
        <Card style={{ backgroundColor: "#FFB6C1" }}>
          <CardContent>
            <Typography variant="h6">Total Projects</Typography>
            <Typography variant="h4">{totalProjects}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card style={{ backgroundColor: "#ADD8E6" }}>
          <CardContent>
            <Typography variant="h6">Average Financial Progress</Typography>
            <Typography variant="h4">{avgFinancialProgress}%</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card style={{ backgroundColor: "#98FB98" }}>
          <CardContent>
            <Typography variant="h6">Average Physical Progress</Typography>
            <Typography variant="h4">{avgPhysicalProgress}%</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card style={{ backgroundColor: "#FFD700" }}>
          <CardContent>
            <Typography variant="h6">Total Population Served</Typography>
            <Typography variant="h4">{totalPopulation}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart: Financial & Physical Progress */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Financial & Physical Progress</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="projectName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="financialProgress" fill="#8884d8" />
                <Bar dataKey="physicalProgress" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart: Project Progress */}
      {data.map((project, index) => (
        <Grid item xs={12} md={6} key={project.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{project.projectName} - Progress Breakdown</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Financial Progress', value: project.financialProgress },
                      { name: 'Physical Progress', value: project.physicalProgress }
                    ]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {COLORS.map((color, i) => (
                      <Cell key={`cell-${i}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

