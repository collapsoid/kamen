import { Link } from 'react-router-dom';

import './styles.css';


interface IHeaderDropdown {
    path: string;
    title: string;
    items: {
        name: string;
        anchor: string;
    }[];
}

export default function HeaderDropdown({path, title, items}: IHeaderDropdown) {
    return (
        <div className="header-dropdown">
            <Link to={`/${path}`} className="header-dropdown__title app-header-link">
                {title}
            </Link>
            <ul className="header-dropdown__list">
                {items.map(item => (
                    <li className="header-dropdown__list-item">
                        <Link to={`/${path}#${item.anchor}`} className="app-header-link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
