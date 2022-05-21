import { Route, Routes } from 'react-router-dom';

import './styles.css';

import Root from './Root/Root';
import Gallery from './Gallery/Gallery';
import Product from './Product/Product';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';


export default function Main() {
    return (
        <main className="app-main">
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="product" element={<Product />} />
                <Route path="service" element={<Service />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<span>not found</span>} />
            </Routes>
        </main>
    );
}
