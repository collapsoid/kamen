import { Link } from 'react-router-dom';

import './styles.css';


interface IHeaderDropdown {
    path: string;
    title: string;
    items: {
        title: string;
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
                {items.map((item, idx) => (
                    <li key={`${item.title}-${idx}`} className="header-dropdown__list-item">
                        <a href={`/${path}#${item.anchor}`} className="app-header-link">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
