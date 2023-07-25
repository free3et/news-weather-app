import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__container}>
          <div className={styles.footer__contact}>
            <p>EDITORIAL CONTACTS</p>
            <a
              className={styles.footer__contact_email}
              href='mailto:info@abcnews.com'
            >
              info@abcnews
            </a>
            <a
              className={styles.footer__contact_phone}
              href='tel: (0444) 41-39-04'
            >
              (0444) 12-34-56
            </a>
            <p>ADVERTISING DEPARTMENT:</p>
            <a
              className={styles.footer__contact_phone}
              href='tel: (0444) 41-39-06'
            >
              (067) 123-45-67
            </a>
          </div>

          <div className={styles.footer__location}>
            <p>New York Times Bldg 620 8th Ave, NY 10018</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2689487804!2d-73.99276702352859!3d40.75610903491346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259acb56ab52f%3A0x1b0e6f6f1b739ea3!2sNew%20York%20Times%20Bldg!5e0!3m2!1suk!2sua!4v1689617474028!5m2!1suk!2sua'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p>©{new Date().getFullYear()} ABC News All rights reserved</p>
      </div>
    </footer>
  );
};
