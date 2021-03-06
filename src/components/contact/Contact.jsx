import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [prob , setprob] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ojy6aa5",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
          setprob(true)
        }
      );
    };
   

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +33 663031010
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              oussamahaouder1@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt=""  />
              11 rue andré Gélas , 69320 <br></br>Feyzin 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b>
            <br/> Get in touch. Always available.
          </p>
          <form ref={formRef} onClick={handleSubmit} >
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..." && !done && "problem occured click on the button below" }
            
            
          </form>
          {prob && <form action="mailto:oussamahaouder1@gmail.com"> <button>send email</button></form> }
        </div>
      </div>
    </div>
  );
};

export default Contact;