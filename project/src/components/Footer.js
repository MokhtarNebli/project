import React from 'react'
import { Instagram } from '@mui/icons-material';
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram /> <Twitter /> <Facebook /> <LinkedIn />
        <p> &copy; 2023 12/05 MokhtarNebli</p>
      </div>
    </div>
  );
  
}

export default Footer;