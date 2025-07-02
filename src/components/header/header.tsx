import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../button/button";

const Header = () => {
  return (
    <header className={styles.header} aria-label="Site Header">
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>Tom&apos;s Programming</h1>
          <h2 className={styles.pageSubtitle}>
            Random thoughts on programming, tech, and life
          </h2>
        </div>
        <nav className={styles.nav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.accountContainer}>
        <Button className={styles.loginButton}>Login</Button>
        <Button className={styles.signupButton}>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
