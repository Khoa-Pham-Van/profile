import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  return (
    <section id="contact">
      <h5></h5>
      <h2>Liên hệ với tôi</h2>

      <div className="container contact__container" >
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option.icon" />
            <h4>Email</h4>
            <h5>vankhoapro2k4@gmail.com</h5>
            <a href="vankhoapro24@gmail.com" target="_blank">
              Gửi tin nhắn
            </a>
          </article>
          {/* <article className="contact__option">
            <FaTelegramPlane className="contact__option.icon" />
            <h4>Telegram</h4>
            <h5>@xllao24</h5>
            <a href="https://t.me/xllao24" target="_blank">
              Send a message
            </a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option.icon" />
            <h4>Zalo</h4>
            <h5>034554916</h5>
            <a
              href="zalohttps://chat.zalo.me"
              target="_blank"
            >
              Gửi tin nhắn
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
