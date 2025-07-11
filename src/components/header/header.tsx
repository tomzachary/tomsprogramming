'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../button/button";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const MenuToggle = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
  <button
    className={styles.menuButton}
    aria-label="Toggle navigation"
    aria-expanded={isOpen}
    onClick={onToggle}
  >
    &#9776;
  </button>
);

const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <nav className={styles.nav} aria-label="Main Navigation">
    <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>Tom&apos;s Programming</h1>
          <p className={styles.pageSubtitle}>
            Random thoughts on programming, tech, and life
          </p>
        </div>
        <MenuToggle isOpen={menuOpen} onToggle={toggleMenu} />
        <Navigation isOpen={menuOpen} />
      </div>
      <div className={styles.accountContainer}>
        <Button className={styles.loginButton}>Login</Button>
        <Button className={styles.signupButton}>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;