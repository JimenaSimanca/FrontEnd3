import React from "react";
import { useGlobalSates } from "./utils/Context";

const Footer = () => {
  const { state, dispatch } = useGlobalSates();
  return (
    <footer className={` ${state.theme}`}>
      <div id="footerText">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" style={{ width: "150px" }} />
      </div>
      <div className="footerImages">
        <img
          src="/images/ico-facebook.png"
          alt="icoFacebook"
          style={{ width: "20px" }}
          className="icon"
        />
        <img
          src="/images/ico-instagram.png"
          alt="icoIg"
          style={{ width: "20px" }}
          className="icon"
        />
        <img
          src="/images/ico-whatsapp.png"
          alt="icoWhatsapp"
          style={{ width: "20px" }}
          className="icon"
        />
        <img
          src="/images/ico-tiktok.png"
          alt="icoTiktok"
          style={{ width: "20px" }}
          className="icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
