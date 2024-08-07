import React from "react";
import "./AdminHome.css";
import useUserStore from "../../../../store/userStore";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

function AdminHome() {
  const user = useUserStore((state) => state.user);

  // Sample data for the chart
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="adminHome">
        <h1 className="adminwelcomemessage">Welcome, {user.firstName}</h1>
      </div>

      <div className="adminHome">
        <h2 className="chartTitle">Sales Data</h2>
        <div className="chartContainer">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
