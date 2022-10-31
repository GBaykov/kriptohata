import React from 'react';
import './footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="footer__content content">
          <p className="content-logo">
            <img className="content-logo-img" src="image.svg" alt="footer-logo" />
            <span className="content-logo-text">
              Крипто<b>Хата</b>
            </span>
          </p>

          <div className="content__phones phones">
            <a className="phones-phone" href="tel:+79269530269">
              +7-926-953-02-69
            </a>
            <a className="phones-phone" href="tel:+375256542366">
              +375-25-654-23-66
            </a>
          </div>
          <div className="content__contacts contacts">
            <a href="mailto:sales@company.com">sales@company.com</a>
            <p className="contacts-icons icons">
              <a className="icons-item">
                <img src="insta.svg" alt="" />
              </a>
              <a className="icons-item">
                <img src="viber.svg" alt="" />
              </a>
              <a className="icons-item">
                <img src="tg-img.svg" alt="" />
              </a>
              <a className="icons-item">
                <img src="tg-img.svg" alt="" />
              </a>
            </p>
          </div>
          <div className="content__buttons buttons">
            <button className="buttons-register"></button>
            <button className="buttons-login"></button>
          </div>
        </div>
        <div className="footer__copyright copyright">
          <p className="copyright-text">Копирайтинг © 2022 КриптоХата. Все права защищены.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
