import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: 36,
}));

export const List = ({
  headerData,
  rows = [],
  handleDelete,
  handleEdit,
  handleAdd,
  title,
  isEditAllowed=true,
  isDeleteAllowed=true,
  isAddAllowed=true,
}) => {
  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          maxWidth: "1060px",
          overflowX: "auto",
          padding:'16px',
           position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            position: '-webkit-sticky',
            top: 0, 
            backgroundColor: "white", 
            zIndex: 1, 
          }}
        >
          <Box flexGrow={1} textAlign="flex-start">
            <Typography
              variant="h6"
              style={{ color: "black", fontWeight: "bolder" }}
            >
              {title}
            </Typography>
          </Box>
          {isAddAllowed && (
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add New
            </Button>
          )}
        </div>
        <Box >
          <Divider sx={{width:'1785px'}} />
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              {headerData.map((item) => (
                <StyledTableCell key={item.id}>{item.label}</StyledTableCell>
              ))}
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <Divider />
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.id}>
                {headerData?.map((item) => (
                  <StyledTableCell key={item.id}>
                    {row[item.valueAccessor]}
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  {isEditAllowed && (
                    <IconButton onClick={() => handleEdit(row.id)}>
                      <EditIcon />
                    </IconButton>
                  )}
                  {isDeleteAllowed && (
                    <IconButton onClick={() => handleDelete(row.id)} sx={{color:'red'}}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
