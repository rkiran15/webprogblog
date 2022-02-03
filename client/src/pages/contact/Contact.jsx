import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="sidebar">
      <div className="sidebarItem">
        <span className="contactTitle">CONTACT US</span>
        <p>
          You can reach out to us at our social media platforms. We'd be glad to hear from you!
        </p>
      <div className="sidebarSocial"><a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><i className="contactIcon fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/login?lang=en" target="_blank" rel='noreferrer'><i className="contactIcon fab fa-twitter-square"></i></a>
      <a href="https://in.pinterest.com/login/" target="_blank" rel='noreferrer'><i className="contactIcon fab fa-pinterest-square"></i></a>
      <a href="https://www.instagram.com/?hl=en" target="_blank" rel='noreferrer'><i className="contactIcon fab fa-instagram-square"></i></a>
      </div>
      </div>
      </div>
    </>
  );
}