import { Link } from 'react-router-dom';

import './styles.css';

import HeaderDropdown from './HeaderDropdown/HeaderDropdown';


export default function Header() {
    const galleryItems = [
        {anchor: 'marble', name: 'Мрамор'},
        {anchor: 'onyx', name: 'Оникс'},
        {anchor: 'granite', name: 'Гранит'},
        {anchor: 'semiprecious', name: 'Полудраг.'},
        {anchor: 'quartzite', name: 'Кварцит'},
        {anchor: 'travertine', name: 'Травертин'},
        {anchor: 'other', name: 'Другое'}
    ];

    const endProductsItems = [
        {anchor: 'slab', name: 'Слэбы'},
        {anchor: 'plate', name: 'Плита'},
        {anchor: 'paving', name: 'Брусчатка'},
        {anchor: 'border', name: 'Бордюры'},
        {anchor: 'quartzite', name: 'Кварцит'},
        {anchor: 'portal', name: 'Порталы'},
        {anchor: 'other', name: 'Другое'}
    ];

    const serviceItems = [
        {anchor: 'consultation', name: 'Консультация'},
        {anchor: 'measurement', name: 'Замер'},
        {anchor: 'design', name: 'Проектирование'},
        {anchor: 'production', name: 'Изготовление изделий'},
        {anchor: 'mounting', name: 'Монтаж'},
        {anchor: 'restoration', name: 'Реставрация'},
        {anchor: 'delivery', name: 'Доставка'}
    ];

    const portfolioItems = [
        {anchor: 'large-projects', name: 'Крупные проекты'},
        {anchor: 'exterior', name: 'Внешняя отделка'},
        {anchor: 'interior', name: 'Внутренняя отделка'},
        {anchor: 'stairs', name: 'Лестницы'},
        {anchor: 'countertop', name: 'Столешницы'},
        {anchor: 'sill', name: 'Подоконники'},
        {anchor: 'other', name: 'Другое'}
    ];

    return (
        <header className="app-header">
            <span className="app-header__logo">kamen</span>
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
                        path="end-products"
                        title="Готовая продукция"
                        items={endProductsItems}
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
                    <div className="app-header-navbar__contacts">
                        <Link to="/contacts" className="app-header-link">
                            Контакты
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
