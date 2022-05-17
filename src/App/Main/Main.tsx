import { Route, Routes } from 'react-router-dom';

import Root from './Root/Root';
import Projects from './Projects/Projects';
import Application from './Application/Application';
import Contacts from './Contacts/Contacts';


export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="projects" element={<Projects />} />
                <Route path="application" element={<Application />} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </main>
    );
}
