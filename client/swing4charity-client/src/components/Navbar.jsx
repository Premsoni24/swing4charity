import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ background: "#222", color: "white", padding: "10px" }}>
      <h3>Swing4Charity</h3>

      {user ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "10px", color: "white" }}>
            Dashboard
          </Link>
          <button onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/" style={{ color: "white" }}>Login</Link>
      )}
    </div>
  );
}