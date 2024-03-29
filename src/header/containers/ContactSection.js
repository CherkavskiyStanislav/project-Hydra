import React from "react";
import { useTranslation } from 'react-i18next';
import Slide from './headerSlide/HeaderSlide';

import phone from "../../img/icons/headerTell.png";
import location from "../../img/icons/headerLoc.png";
import mail from "../../img/icons/headerMail.png";


export const ContactSection = () => {
  const { t } = useTranslation();

  const contact = [
    <div className="contact  address" key="address">
      <a href="https://goo.gl/maps/tgzaBprwZNoc6DsXA" className="location" target="blank">
        <img src={location} alt="location" />
        <h3>
          {t('address')}
          <p>Union St, Seattle, WA 98101, United States</p>
        </h3>
      </a>
    </div>,
    <div className="contact  phone" key="phone">
      <a href="tel:+11011111010" className="tell">
        <img src={phone} alt="phone" />
        <h3>
          {t('phone')}
          <p>(110) 1111-1010</p>
        </h3>
      </a>
    </div>,
    <div className="contact" key="email">
      <a href="mailto: Contact@HydraVTech.com" className="email">
        <img src={mail} alt="email" />
        <h3>
          {t('email')}
          <p>Contact@HydraVTech.com</p>
        </h3>
      </a>
    </div>
  ];

  return (
    <Slide contact={contact}/>
  )
}