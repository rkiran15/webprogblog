import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import aboutus from './aboutusresize.jpeg'

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src={aboutus}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><i className="sidebarIcon fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/login?lang=en" target="_blank" rel='noreferrer'><i className="sidebarIcon fab fa-twitter-square"></i></a>
      <a href="https://in.pinterest.com/login/" target="_blank" rel='noreferrer'><i className="sidebarIcon fab fa-pinterest-square"></i></a>
      <a href="https://www.instagram.com/?hl=en" target="_blank" rel='noreferrer'><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
