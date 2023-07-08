import React from "react";
import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            text={"VIA SUPPORT CHAT"}
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text={"VIA EMAIL FORM"}
          icon={<HiMail fontSize="24px" />}
        />
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
          </div>
          <div
           style={{
            display:"flex",
            justifyContent:"end"
            }}>
            <Button text={"SUBMIT"} />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/Images/service.svg" alt="service_image" />
      </div>
    </section>
  );
}

export default ContactForm;
