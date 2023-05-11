import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <div className="headerContainer">
                <div className="logo">
                    <Link href="/">Spellbook Companion</Link>
                </div>
                <div className="links">
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Spell name"></input>
                </div>
            </div>
        </header>
    )
}
export default Header