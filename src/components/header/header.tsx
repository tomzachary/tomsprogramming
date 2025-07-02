import Link from "next/link";


const Header = () => {
    return (
        <header className="header" aria-label="Site Header">
            <h1>Tom&apos;s Programming</h1>
            <p>A collection of interesting programming topics, tips, and discoveries</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;