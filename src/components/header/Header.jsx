import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Crafty Threadheads</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://live.staticflickr.com/7412/13084716005_55e652ff8a_k.jpg"
        alt=""
      />
    </div>
  );
}
