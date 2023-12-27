import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_gbmb8gs",
        "template_lsr4yys",
        e.target,
        "yNRD0TWJ_79Dmv0Jq"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder=" Email" />
          <textarea placeholder=" message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks,I'll replay ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
