import React from "react";
import "./AdminUsers.css";
import { api_url } from "../../../../utills/config";
import axios from "axios";
import toast from "react-simple-toasts";
import { Link } from "react-router-dom";
import useUserStore from "../../../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
function AdminUsers() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    async function fetchUsers() {
      if (user && user.role === "admin") {
        try {
          setLoading(true);
          const response = await axios.get(`${api_url}/api/users/getusers`, {
            withCredentials: true,
          });
          if (response.data.success === true) {
            console.log(response.data.data);
            setUsers(response.data.data);
          }
        } catch (error) {
          if (error) {
            toast("There was an error getting users");
            setLoading(false);
          }
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/Page404");
      }
    }
    fetchUsers();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!users) {
    return <p>No users Found</p>;
  }
  return (
    <>
      <AdminHeader />
      <div className="messagesheadingg">
        <h1>Jostech Users</h1>
        <Link to={"/AddUser"}>
          <button>Add An Admin</button>
        </Link>
      </div>
      <div className="adminusers">
        {users.map((user) => (
          <div className="userscontainer" key={user.id}>
            <p>Name {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminUsers;
