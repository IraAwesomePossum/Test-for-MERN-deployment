import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      console.log(res.data);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img
              src="https://images.pexels.com/photos/5945640/pexels-photo-5945640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="face"
            />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>ABOUT THIS BLOG</h3>
        <div>
          <p className="sidebarPar">
            A decade ago, we set out to bring cooks together from all over to
            exchange recipes and to support each other in the kitchen. We wanted
            to create a buzzing place for others who do what we do all day long:
            talk about food!
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={`/?cat=${c.name}`}
              >
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-facebook-f"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
