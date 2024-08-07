import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import useUserStore from "../../../../store/userStore";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

function AdminHome() {
  const user = useUserStore((state) => state.user);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true); // New state for loading
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users/getusers"); // API endpoint
        console.log(response);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        if (result.success) {
          // Prepare data for the chart
          const labels = result.data.map(user => user.firstName); // User names as labels
          const values = result.data.map(user => new Date(user.createdAt).getTime()); // Convert dates to timestamps

          const formattedData = {
            labels: labels,
            datasets: [
              {
                label: "User Registration Dates",
                data: values,
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
              },
            ],
          };

          setChartData(formattedData);
        } else {
          setError(result.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchUserData();
  }, []);

  // Options for the chart
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Users"
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Registration Dates"
        }
      },
    },
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="adminHome">
        <h1 className="adminwelcomemessage">Welcome, {user.firstName}</h1>
      </div>

      <div className="adminHome">
        <h2 className="chartTitle">User Statistics</h2>
        <div className="chartContainer">
          {chartData ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
