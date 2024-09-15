import React, { useEffect, useState } from "react";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { List } from "../../Common/List";
import { zoneHeaders } from "../../../formData";
import { AddZone } from "./AddZone";
import { getAllZones } from "../../../Apis/ZoneApis";
import { useHeader } from "../../../Context/HeaderContext";
import CustomModalForm from "../../CustomModal/CustomModalForm";

export const ZoneList = () => {
  const [open, setOpen] = useState(false);
  const [zoneData, setZoneData] = useState([]);
  const [selectedZone, setSelectedZone] = useState();
  const { addFormTitle, loadApi } = useHeader();

  const handleEdit = (id) => {
    const zoneToEdit = zoneData.find((zone) => zone.id === id);
    setSelectedZone(zoneToEdit);
    setOpen(true);
    addFormTitle("Update Zone");
  };

  const handleDelete = (id) => {
    setZoneData(zoneData.filter((row) => row.id !== id));
  };

  const handleAdd = () => {
    setSelectedZone(null);
    setOpen(true);
    addFormTitle("Add Zone");
  };

  useEffect(() => {
    getAllZones()
      .then((response) => {
        setZoneData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching PIUs:", error);
      });
  }, [loadApi]);

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <>
      <CustomModalForm open={open} onClose={handleClose} icon={<MeetingRoomIcon/>}>
        <AddZone setOpen={setOpen} zonesDetails={selectedZone} />
      </CustomModalForm>
      <List
        headerData={zoneHeaders}
        rows={zoneData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
        title={"Zone List"}
      />
    </>
  );
};
