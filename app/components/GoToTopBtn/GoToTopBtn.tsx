import { useState, useEffect } from 'react';
import styles from './GoToTopBtn.module.scss';

export const GoToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={styles.goToTopButton}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <h3>&#8679;</h3>
    </button>
  );
};
