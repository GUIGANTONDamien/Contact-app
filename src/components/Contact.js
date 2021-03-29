import React from "react";
import "./Contact.css";

const name = "Damien GUIGANTON";
const avatar = "https://avatars.githubusercontent.com/u/67998817?v=4";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;