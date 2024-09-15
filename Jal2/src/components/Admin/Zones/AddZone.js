import React, { useEffect, useState } from "react";
import { zoneHeaders } from "../../../formData";
import { createZone, updateZone } from "../../../Apis/ZoneApis";
import { useHeader } from "../../../Context/HeaderContext";
import { Form2 } from "../../Common/Form2";

export const AddZone = ({ setOpen ,zonesDetails }) => {
  const [formData, setFormData] = useState(zonesDetails || {});
  const { addFormTitle, setLoadApi, loadApi } = useHeader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (zonesDetails) {
        const response = await updateZone(zonesDetails.id, formData);
        if (response) {
          setOpen(false);
          setLoadApi(!loadApi);
        }
      } else {
        const response = await createZone(formData);
        if (response) {
          setOpen(false);
          setLoadApi(!loadApi);
        }
      }
    } catch (err) {
      console.error("Error saving Zone:", err);
    }
  };

  useEffect(() => {
    addFormTitle(zonesDetails ? "Update Zone" : "Add Zones");
  }, [zonesDetails]);

  return (
    <Form2
      fieldData={zoneHeaders.slice(1)}
      handleSubmit={handleSubmit}
      state={formData}
      setState={setFormData}
    />
  );
};
