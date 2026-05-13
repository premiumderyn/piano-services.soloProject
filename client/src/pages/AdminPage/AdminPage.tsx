import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./AdminPage.module.css";

const COLORS = ["#b89558", "#5e6b52", "#8c907e", "#2a2a2a"];

export function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/login");
      return;
    }

    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data.data.bookings))
      .catch((err) => console.error(err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  const serviceStats = bookings.reduce((acc: any, booking: any) => {
    const serviceName =
      booking.service.charAt(0).toUpperCase() + booking.service.slice(1);
    acc[serviceName] = (acc[serviceName] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(serviceStats).map((key) => ({
    name: key,
    value: serviceStats[key],
  }));

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin!</p>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <div className={styles.topSection}>
        <div className={styles.statsCards}>
          <div className={styles.card}>
            <h3>Total Bookings</h3>
            <p className={styles.statNumber}>{bookings.length}</p>
          </div>
          <div className={styles.card}>
            <h3>Most Popular Service</h3>
            <p className={styles.statText}>
              {chartData.length > 0
                ? chartData.sort((a, b) => b.value - a.value)[0].name
                : "N/A"}
            </p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Bookings by Service</h3>
          <div className={styles.chartWrapper}>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className={styles.noData}>No data to display yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <h3>Recent Bookings</h3>
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b: any) => (
                <tr key={b._id}>
                  <td className={styles.fw500}>{b.name}</td>
                  <td>{b.phone}</td>
                  <td>{b.email}</td>
                  <td>
                    <span className={styles.serviceBadge}>{b.service}</span>
                  </td>
                  <td className={styles.dateCell}>
                    {new Date(b.createdAt).toLocaleDateString("en-GB")}
                    <br />
                    <span className={styles.time}>
                      {new Date(b.createdAt).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={5} className={styles.emptyTable}>
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
