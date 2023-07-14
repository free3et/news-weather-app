import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__contact}>
          <p>EDITORIAL CONTACTS</p>
          <a className={styles.footer__contact_email} href="mailto:info@abcnews.com">
            info@abcnews
          </a>
          <a className={styles.footer__contact_phone} href="tel: (0444) 41-39-04">
            (0444) 41-39-04, (067) 810-44-55
          </a>
          <p>ADVERTISING DEPARTMENT:</p>
          <a className={styles.footer__contact_phone} href="tel: (0444) 41-39-06">
            (0444) 41-39-06
          </a>
        </div>

        <div className={styles.footer__location}>
          <p>Astarta BC, 58 Yaroslavska Street, Kyiv, 04041</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.352383718622!2d30.51706346594457!3d50.47178324370834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef1dad747f1%3A0x5c6494f5e9d8d874!2sItera!5e0!3m2!1sen!2sua!4v1672249419229!5m2!1sen!2sua"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>© 2022 News Weather Currency All rights reserved</p>
      </div>
    </div>
  );
};
