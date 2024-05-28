import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:6451/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed..");
      }

      const data = await response.json();
      const token = data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", "true");
      if (token) navigate("/catalog/dashboard");
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };
  return (
    <div className="log-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <label> Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Admin"
            />
          </div>
          <div className="input-box">
            <label> Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
