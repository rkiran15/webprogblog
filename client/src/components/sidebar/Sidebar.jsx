import { Link } from "react-router-dom";
import "./sidebar.css";
import aboutus from './aboutusresize.jpeg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src={aboutus}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=amigurumi">
              Amigurumi
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=animal">
              Animal
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=crochet">
              Crochet
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=knitting">
              Knitting
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=materials">
              Materials
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
