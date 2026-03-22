import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");

  const login = async () => {
    const res = await axios.post("https://swing4charity.onrender.com/auth/login", {...});
    localStorage.setItem("user", JSON.stringify(res.data));
    window.location.href = "/dashboard";
  };

  return (
  <div style={{ 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    marginTop: "100px" 
  }}>
    <h2>Login</h2>

    <input
      placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      style={{ padding: "10px", marginBottom: "10px" }}
    />

    <button onClick={login} style={{ padding: "10px 20px" }}>
      Login
    </button>
  </div>
);
}