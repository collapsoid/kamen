import { useEffect, useState } from 'react';

import './styles.css';

import Controls from './Controls/Controls';


export default function SlideShow() {
    const [page, setPage] = useState(1);

    const photos = ['a', 'b', 'c'];

    useEffect(() => {
        const timer = setInterval(() => {
            setPage(page => page + 1 > photos.length ? 1 : page + 1);
        }, 3500);

        return () => {
            clearInterval(timer);
        };
    }, [photos.length, page]);

    return (
        <section className="main-slideshow">
            <Controls
                photos={photos}
                page={page}
                setPage={setPage}
            />
        </section>
    );
}
