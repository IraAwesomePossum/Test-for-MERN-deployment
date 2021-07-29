import "./register.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="main">
        <p className="sign" align="center">
          Sign up
        </p>
        <form className="form1" onSubmit={handleSubmit}>
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerBtn link" align="center" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
