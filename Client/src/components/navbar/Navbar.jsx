import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-tiktok"></i> */}
        <img
          className="navImg"
          src="https://i.ibb.co/ZYtJjjM/f7180738edbb44bbb4e0bba673e781ce.png"
        ></img>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ color: "inherit" }}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" style={{ color: "inherit" }}>
              ABOUT
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/create " style={{ color: "inherit" }}>
              CREATE A POST
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImage" src={PF + user.profilePic} alt="image" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" style={{ color: "inherit" }}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" style={{ color: "inherit" }}>
                SIGN UP
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
