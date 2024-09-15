import React, { useEffect, useState } from "react";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { AddPiu } from "./AddPiu";
import { List } from "../../Common/List";
import { piuHeaders } from "../../../formData";
import { getAllPius } from "../../../Apis/PiuApis";
import { useHeader } from "../../../Context/HeaderContext";
import CustomModalForm from "../../CustomModal/CustomModalForm";

export const PiuList = () => {
  const [piuData, setPiuData] = useState([]);
  const [selectedPiu, setSelectedPiu] = useState(null);
  const [open, setOpen] = useState(false);
  const { addFormTitle,loadApi } = useHeader();

  const handleEdit = (id) => {
    const piuToEdit = piuData.find((piu) => piu.id === id);
    setSelectedPiu(piuToEdit);
    setOpen(true);
    addFormTitle("Update PIU");
  };

  const handleDelete = (id) => {
    setPiuData(piuData.filter((row) => row.id !== id));
  };

  const handleAdd = () => {
    setSelectedPiu(null); 
    setOpen(true);
    addFormTitle("Add PIU");
  };

  const handleClose = () =>{
    setOpen(false)
  }

  useEffect(() => {
    getAllPius()
      .then((response) => {
        setPiuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching PIUs:", error);
      });
  }, [loadApi]);

  return (
    <>
      <CustomModalForm open={open} onClose={handleClose} icon={<LocationCityIcon/>}>
        <AddPiu setOpen={setOpen} piuData={selectedPiu} />
      </CustomModalForm>
      <List
        headerData={piuHeaders}
        rows={piuData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
        title={"Piu List"}
      />
    </>
  );
};
