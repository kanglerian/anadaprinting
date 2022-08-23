import React from "react";
import Lottie from 'lottie-react'
import WhatsappAnim from '../images/whatsapp.json'
import { Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '20px', width: '100px', height: '100px' }}>
      <Link href='https://api.whatsapp.com/send?phone=6285315666799&text=Halo%20kak,%20saya%20mau%20pesan' isExternal>
        <Lottie animationData={WhatsappAnim} loop={true} />
      </Link>
    </div>
  );
};

export default Footer;
