import './styles.css';

import { galleryItems } from '../../App/Main/Gallery/Gallery';
import { productItems } from '../../App/Main/Product/Product';
import { serviceItems } from '../../App/Main/Service/Service';
import { portfolioItems } from '../../App/Main/Portfolio/Portfolio';

import HeaderDropdown from './HeaderDropdown/HeaderDropdown';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="app-header">
            <span className="app-header__logo">
                <Link to="/" className="app-header-link">
                    kamen
                </Link>
            </span>
            <nav className="app-header-navbar">
                <div className="app-header-navbar__item">
                    <HeaderDropdown
                        path="gallery"
                        title="Галерея камня"
                        items={galleryItems}
                    />
                </div>
                <div className="app-header-navbar__item">
                    <HeaderDropdown
                        path="product"
                        title="Готовая продукция"
                        items={productItems}
                    />
                </div>
                <div className="app-header-navbar__item">
                    <HeaderDropdown
                        path="service"
                        title="Услуги"
                        items={serviceItems}
                    />
                </div>
                <div className="app-header-navbar__item">
                    <HeaderDropdown
                        path="portfolio"
                        title="Портфолио"
                        items={portfolioItems}
                    />
                </div>
                <div className="app-header-navbar__item">
                    <HeaderDropdown
                        path="contacts"
                        title="Контакты"
                        items={[]}
                    />
                </div>
            </nav>
        </header>
    );
}
