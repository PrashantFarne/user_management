import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface IUserDetails {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserDetails = () => {
  const [userData, setUserData] = useState<IUserDetails>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchUserData = async (userId: string | undefined) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
        backgroundColor: "#eeeeee",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>User Details</h2>
        <div style={{ textAlign: "center" }}>
          <img
            src={userData.avatar}
            alt={`Avatar of ${userData.first_name} ${userData.last_name}`}
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
          <p>Email: {userData.email}</p>
          <p>Name: {`${userData.first_name} ${userData.last_name}`}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
