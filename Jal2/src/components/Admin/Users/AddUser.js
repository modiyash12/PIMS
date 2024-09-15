import React, { useEffect, useState } from "react";
import { userCredentialsData } from "../../../formData";
import { generateUUID } from "../../../CommonFunction";
import { getAllPius } from "../../../Apis/PiuApis";
import { createUser } from "../../../Apis/UsersApi";
import { Form2 } from "../../Common/Form2";
import { useHeader } from "../../../Context/HeaderContext";

export const AddUser = ({ setOpen, updateData }) => {
  const [userCredentials, setUserCredentials] = useState({});
  const [pius, setPius] = useState([]);
  const { addFormTitle, setLoadApi, loadApi } = useHeader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const piusResponse = await getAllPius();
        setPius(piusResponse.data);
        if (updateData) {
          setUserCredentials(updateData);
          addFormTitle("Update User")
        }else{
          setUserCredentials((prevCreds) => ({
            ...prevCreds,
            piu: piusResponse.data[0]?.piuId,
          }));
          addFormTitle("Add User")
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [updateData]);


  const getMenuOptions = (name) => {
    switch (name) {
      case "piu":
        return pius.map((piu) => ({ value: piu.piuId, title: piu.piuId }));
      case "piuName":
        return pius.map((piu) => ({ value: piu.piuName, title: piu.piuName }));
      default:
        return [];
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uuid = generateUUID();
    const updatedCredentials = {
      ...userCredentials,
      uuid: uuid,
      role: "user",
    };
    try {
      let res = await createUser(updatedCredentials);
      if (res) {
        setOpen(false);
        setLoadApi(!loadApi)
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <Form2
        handleSubmit={handleSubmit}
        state={userCredentials}
        setState={setUserCredentials}
        getMenuOptions={getMenuOptions}
        fieldData={userCredentialsData}
      />
    </>
  );
};
