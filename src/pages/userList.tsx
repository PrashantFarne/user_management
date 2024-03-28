import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/header";
import "./style.css";
import Sidebar from "./sidebar";
import Loader from "../component/loader";

interface IUserData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

interface SupportData {
  url: string;
  text: string;
}

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface PageData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: SupportData;
}

interface IAPIResponse {
  data: PageData;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Record<string, any>;
    headers: Record<string, string>;
    method: string;
    url: string;
  };
  request: Record<string, any>;
}

const UserList = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  const handleUserClick = (id: number) => {
    window.location.href = `/userdetail/${id}`;
  };

  const fetchUsers = async () => {
    try {
      const response: IAPIResponse = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
