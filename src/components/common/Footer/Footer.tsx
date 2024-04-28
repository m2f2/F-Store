import styles from "./Footer.module.css";

import React from 'react'
const {footerContainer} = styles
const Footer = () => {
  return (
    <div className={footerContainer}>
      &copy; 2024 F Store, All rights reserved.
    </div>
  )
}

export default Footer
