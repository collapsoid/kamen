import { Link } from 'react-router-dom';

import './styles.css';


export default function Header() {
    return (
        <header className="app-header">
            <span className="app-header__logo">kamen</span>
            <nav className="app-header-navbar">
                <Link to="/" className="app-header-navbar__item">
                    Главная
                </Link>
                <Link to="/projects" className="app-header-navbar__item">
                    Проекты
                </Link>
                <Link to="/application" className="app-header-navbar__item">
                    Заявка
                </Link>
                <Link to="/contacts" className="app-header-navbar__item">
                    Контакты
                </Link>
            </nav>
        </header>
    );
}
