import Image from 'next/image';
import facebook from '../../assets/header/facebook.png';
import instagram from '../../assets/header/instagram.png';
import linkedin from '../../assets/header/linkedin.png';
import skype from '../../assets/header/skype.png';
import twitter from '../../assets/header/twitter.png';
import styles from './Header.module.scss';

export const Header = () => {
  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div
            className={`${styles.logo_portal} col-xs-6 col-sm-4 col-md-4 col-lg-4`}
          >
            <ul className={styles.logo}>
              <li className={styles.logo_letter}>A</li>
              <li className={styles.logo_letter}>B</li>
              <li className={styles.logo_letter}>C</li>
            </ul>
            <span>NEWS</span>
          </div>
          <div className={`${styles.date} col-xs-6 col-sm-4 col-md-4 col-lg-4`}>
            {date}
          </div>
          <div
            className={`${styles.social_network} col-xs-12 col-sm-4 col-md-4 col-lg-4`}
          >
            <ul>
              <li>
                <a href='#'>
                  <Image src={facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image src={instagram} alt='instagram' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image src={linkedin} alt='linkedin' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image src={skype} alt='skype' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image src={twitter} alt='twitter' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
