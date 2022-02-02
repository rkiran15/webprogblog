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
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Amigurumi">
              Amigurumi
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Animal">
              Animal
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Crochet">
              Crochet
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Knitting">
              Knitting
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Materials">
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
