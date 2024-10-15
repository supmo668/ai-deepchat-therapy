import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">AI Therapy Chat</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/subscribe">Subscribe</Link>
        </li>
        <li>
          <button className={styles.loginButton}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
