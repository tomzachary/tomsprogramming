import styles from "./page.module.css";

export default function Landing() {
    return (
        <main className={styles.landing}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Welcome to Tom&apos;s Programming</h1>
                <p className={styles.subtitle}>
                    Insights, tutorials, and thoughts on modern web development, tech, and life. Join the journey and level up your skills!
                </p>
                <div className={styles.cta}>
                    <a href="/signup" className={styles.button}>Get Started</a>
                    <a href="/about" className={`${styles.button} ${styles.secondary}`}>Learn More</a>
                </div>
            </section>
        </main>
    );
}