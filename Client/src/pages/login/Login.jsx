import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext } from "react";

import { useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="main">
        <p className="sign" align="center">
          Login
        </p>
        <form className="form1" onSubmit={handleSubmit}>
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            ref={userRef}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            className="submit link"
            align="center"
            type="submit"
            disabled={isFetching}
          >
            Login
          </button>
          <button className="submit link" align="center" type="submit">
            <Link className="link" to="/register">
              Sign up
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
