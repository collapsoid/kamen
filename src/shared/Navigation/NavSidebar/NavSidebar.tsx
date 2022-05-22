import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';


interface INavSidebar {
    sections: {
        path?: string;
        title: string;
        items: {
            title: string;
            anchor: string;
        }[];
    }[];
    threshold?: number;
}

export function NavSidebar({sections, threshold = 150}: INavSidebar) {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setActiveItem(getCurrentAnchor(sections, threshold));
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [sections.length]);

    useEffect(() => {
        if (!activeItem) {
            setActiveItem(getCurrentAnchor(sections, threshold));
        }
    }, [activeItem, sections.length, location.hash]);

    return (
        <nav className="navigation-sidebar">
            {sections.map((section, sectionIdx) => (
                <section key={`${section.title}-${sectionIdx}`} className="navigation-sidebar__section">
                    <div className="navigation-sidebar__section-title-container">
                        <h3 className="navigation-sidebar__section-title">
                            {section.title}
                        </h3>
                    </div>
                    <ul className="navigation-sidebar__section-list">
                        {section.items.map((item, itemIdx) => (
                            <li
                                key={`${section.title}-${itemIdx}`}
                                className={
                                    "navigation-sidebar__section-list-item"
                                    + (item.anchor === activeItem ? " navigation-sidebar__section-list-item_active" : "")
                                }
                            >
                                <a href={`#${item.anchor}`} className="navigation-sidebar__section-link">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </nav>
    );
}


function getCurrentAnchor(sections: INavSidebar['sections'], threshold: number) {
    const anchors = sections.map(section => section.items.map(item => document.getElementById(item.anchor))).flat();
    let activeItem = '';

    anchors.forEach(anchor => {
        if (!anchor?.id) {
            return;
        }

        const top = anchor.getBoundingClientRect().top;

        if (top < threshold) {
            activeItem = anchor.id;
        }
    });

    if (window.pageYOffset + document.documentElement.clientHeight + 30 >= document.documentElement.offsetHeight) {
        const anchor = anchors[anchors.length - 1];

        if (anchor?.id) {
            activeItem = anchor.id;
        }
    }

    return activeItem;
}
