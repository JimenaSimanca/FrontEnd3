import React from "react";
import { useGlobalSates } from "./utils/Context";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { state, dispatch } = useGlobalSates();
  const navigate = useNavigate ();
  return (
    <footer className={` ${state.theme}`}>
      <div>
        <button className ={`volver`} onClick={() => navigate(-1)}>Volver ↩</button>
      </div>
      <div id="footerText">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" style={{ width: "200px" }} />
      </div>
      <div className="footerImages">
        <img
          src="/images/ico-facebook.png"
          alt="icoFacebook"
          style={{ width: "25px" }}
          className="icon"
        />
        <img
          src="/images/ico-instagram.png"
          alt="icoIg"
          style={{ width: "25px" }}
          className="icon"
        />
        <img
          src="/images/ico-whatsapp.png"
          alt="icoWhatsapp"
          style={{ width: "25px" }}
          className="icon"
        />
        <img
          src="/images/ico-tiktok.png"
          alt="icoTiktok"
          style={{ width: "25px" }}
          className="icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
