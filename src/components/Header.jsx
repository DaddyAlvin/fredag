function Header() {
    return (
        <header>
        <div className="header-bar">
            <a className="brand" href="#home">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2 7 9h3l-4.5 6h4L6 20h5v3h2v-3h5l-3.5-5h4L14 9h3z" />
            </svg>
            alvin<span>/</span>
            </a>
            <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Meny</button>
        </div>
        <p className="role">Junior developer</p>

        <nav id="site-nav" className="tree-nav" aria-label="Huvudmeny">
            <ul className="tree">
            <li><a href="#home">Hem</a></li>
            <li><a href="#about">Om mig</a></li>
            <li><a href="#skills">Kunskaper</a></li>
            <li>
                <a href="#projects">Projekt</a>
                <ul>
                <li><a href="subslayer.html">SubSlayer</a></li>
                </ul>
            </li>
            <li><a href="#interests">Fritid</a></li>
            <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;