import "./about.css";
import aboutus from './aboutusresize.jpeg'

export default function About() {
  return (
    <>
      <div className="sidebar">
      <div className="sidebarItem">
        <span className="aboutTitle">ABOUT US</span>
        <img
          src={aboutus}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      </div>
    </>
  );
}
