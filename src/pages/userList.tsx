import React, { useEffect, useState } from "react";
import Header from "../component/header";
import "./style.css";
import Sidebar from "./sidebar";
import Loader from "../component/loader";
import { useDispatch, useSelector } from "react-redux";
import { addUserListData } from "../redux/user";

interface IUserData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const dispatch: any = useDispatch();
  const resList = useSelector((state: any) => state?.todos?.userList);

  useEffect(() => {
    dispatch(addUserListData());
  }, [dispatch]);

  useEffect(() => {
    setUsers(resList);
  }, [resList]);

  const handleUserClick = (id: number) => {
    window.location.href = `/userdetail/${id}`;
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <Header title="User List" />
        <div className="overflow-x-auto" style={{ marginLeft: "10px" }}>
          {users?.length ? (
            <table className="table-auto w-full bg-custom">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 custom-width">ID</th>
                  <th className="px-6 py-3 custom-width">First Name</th>
                  <th className="px-6 py-3 custom-width">Last Name</th>
                  <th className="px-6 py-3 custom-width">Full Name</th>
                  <th className="px-6 py-3 custom-width">Email</th>
                  <th className="px-6 py-3 custom-width">Avatar</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user: IUserData, index: number) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {user.id}
                      </td>
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => handleUserClick(user.id)}
                      >
                        {user.first_name}
                      </td>
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {user.last_name}
                      </td>
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {user.first_name} {user.last_name}
                      </td>
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {user.email}
                      </td>
                      <td
                        className="px-6 py-3 custom-width text-center"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <img
                          src={user.avatar}
                          alt={`Avatar of ${user.first_name} ${user.last_name}`}
                          className="h-10 w-10 rounded-full"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
