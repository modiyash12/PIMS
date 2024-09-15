import React, { useEffect, useState } from "react";
import { projectHeaders } from "../../UserFormData";
import { List } from "../Common/List";
import {
  deleteDetail,
  getAllProjectDetail,
} from "../../Apis/ProjectDetailsApi";
import { useHeader } from "../../Context/HeaderContext";

export const ProgressMonitoringList = () => {
  const [progressList, setProgressList] = useState([]);
  const { loadApi, setLoadApi } = useHeader();

  useEffect(() => {
    getAllProjectDetail()
      .then((response) => {
        setProgressList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching PIUs:", error);
      });
  }, [loadApi]);

  const handleDelete = (id) => {
    deleteDetail(id)
      .then((res) => {
        if (res) {
          setLoadApi(!loadApi);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <List
      headerData={projectHeaders}
      rows={progressList}
      handleDelete={handleDelete}
      title={"Progress Monitoring List"}
      isAddAllowed={false}
      isEditAllowed={false}
    />
  );
};
