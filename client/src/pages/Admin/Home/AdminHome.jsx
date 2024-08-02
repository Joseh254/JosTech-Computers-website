import React from "react";
import "./AdminHome.css";
import useUserStore from "../../../../store/userStore";

function AdminHome() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <div className="adminHome">
        <h1 className="adminwelcomemessage">welcome {user.firstName}</h1>
      </div>
    </>
  );
}

export default AdminHome;
