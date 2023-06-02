import React, { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "@emailjs/browser";

const From = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4zje26m",
        "template_qpcxhzu",
        form.current,
        "xIaklUCW30ebHjTdr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-section-conatiner d-flex flex-column" id="contact">
      <h1>
        <span>Curiosity</span>
        <br></br>
        piqued.
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="email-input d-flex">
          <input type="email" name="email" placeholder="Your email"></input>
          <button type="submit">
            <ArrowForwardIcon />
          </button>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          natus, hic veniam voluptatibus omnis tempore ex iste error cumque
          velit.
        </p>
      </form>
    </div>
  );
};

export default From;
