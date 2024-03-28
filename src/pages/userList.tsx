// UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      console.log(response, "response");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, "users");

  useEffect(() => {
    console.log(users, "lshdsdlkjsldjjsd");
    users?.map((item) => {
      console.log(item, "sjdgusdkhksdhkhd");
      return null;
    });
  }, [users]);

  return (
    <div>
      <h2>User List</h2>
      <ul>{users && users?.map((user) => <>{user}</>)}</ul>
    </div>
  );
};

export default UserList;
