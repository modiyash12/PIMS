import React, { useEffect, useState } from "react";
import { List } from "../../Common/List";
import { userHeaders } from "../../../formData";
import { useHeader } from "../../../Context/HeaderContext";
import { getAllUsers } from "../../../Apis/UsersApi";
import { AddUser } from "./AddUser";
import CustomModalForm from "../../CustomModal/CustomModalForm";
import PersonIcon from "@mui/icons-material/Person";

export const Viewuser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const { addFormTitle, loadApi } = useHeader();

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (id) => {
    const userEdit = users.find((user) => user.id === id);
    console.log(userEdit);
    setSelectedUser(userEdit);
    setOpen(true);
    addFormTitle("Update User");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((row) => row.id !== id));
  };

  const handleAdd = () => {
    setSelectedUser(null);
    setOpen(true);
    addFormTitle("Add User");
  };

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res?.data?.filter((user) => user.username !== "Admin"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loadApi]);

  return (
    <>
      <CustomModalForm open={open} onClose={handleClose} icon={<PersonIcon />}>
        <AddUser setOpen={setOpen} updateData={selectedUser} />
      </CustomModalForm>
      <List
        headerData={userHeaders}
        rows={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
        title={"Users List"}
      />
    </>
  );
};
