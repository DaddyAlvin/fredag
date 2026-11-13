import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const onHomePage = location.pathname === '/';
    const sectionLink = (id) => onHomePage ? `#${id}` : `/#${id}`;
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={menuOpen ? 'nav-open' : ''}>
        <div className="header-bar">
            <Link className="brand" to="/#home" onClick={closeMenu}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2 7 9h3l-4.5 6h4L6 20h5v3h2v-3h5l-3.5-5h4L14 9h3z" />
            </svg>
            alvin<span>/</span>
            </Link>
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-nav"
                onClick={() => setMenuOpen((open) => !open)}
            >
                Meny
            </button>
        </div>
        <p className="role">Junior developer</p>

        <nav id="site-nav" className="tree-nav" aria-label="Huvudmeny">
            <ul className="tree">
            <li><a href={sectionLink('home')} data-section-link={onHomePage ? 'home' : undefined} onClick={closeMenu}>Hem</a></li>
            <li><a href={sectionLink('about')} data-section-link={onHomePage ? 'about' : undefined} onClick={closeMenu}>Om mig</a></li>
            <li><a href={sectionLink('skills')} data-section-link={onHomePage ? 'skills' : undefined} onClick={closeMenu}>Kunskaper</a></li>
            <li>
                <a href={sectionLink('projects')} data-section-link={onHomePage ? 'projects' : undefined} onClick={closeMenu}>Projekt</a>
                <ul>
                <li>
                    <Link to="/subslayer" aria-current={!onHomePage ? 'page' : undefined} onClick={closeMenu}>SubSlayer</Link>
                    {!onHomePage && (
                        <ul>
                            <li><a href="#features" data-section-link="features" onClick={closeMenu}>Funktioner</a></li>
                            <li><a href="#tech" data-section-link="tech" onClick={closeMenu}>Teknik</a></li>
                            <li><a href="#structure" data-section-link="structure" onClick={closeMenu}>Struktur</a></li>
                        </ul>
                    )}
                </li>
                </ul>
            </li>
            <li><a href={sectionLink('interests')} data-section-link={onHomePage ? 'interests' : undefined} onClick={closeMenu}>Fritid</a></li>
            <li><a href={sectionLink('contact')} data-section-link={onHomePage ? 'contact' : undefined} onClick={closeMenu}>Kontakt</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;