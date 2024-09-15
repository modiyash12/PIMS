import React, { useEffect, useState } from "react";
import { piuHeaders } from "../../../formData";
import { useHeader } from "../../../Context/HeaderContext";
import { createPiu, updatePiu } from "../../../Apis/PiuApis";
import { Form2 } from "../../Common/Form2";

export const AddPiu = ({ setOpen, piuData }) => {
  const [formData, setFormData] = useState(piuData || {});
  const { addFormTitle, setLoadApi, loadApi } = useHeader();

  useEffect(() => {
    if (piuData) setFormData(piuData);
    addFormTitle(piuData ? "Update PIU" : "Add PIU");
  }, [piuData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (piuData) {
        const response = await updatePiu(piuData.id, formData);
        if (response) {
          setOpen(false);
          setLoadApi(!loadApi);
        }
      } else {
        const response = await createPiu(formData);
        if (response) {
          setOpen(false);
          setLoadApi(!loadApi);
        }
      }
    } catch (err) {
      console.error("Error saving PIU:", err);
    }
  };

  return (
    <Form2
      fieldData={piuHeaders.slice(1)}
      handleSubmit={handleSubmit}
      setState={setFormData}
      state={formData}
    />
  );
};
