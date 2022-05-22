import { useEffect, useState } from 'react';

import './styles.css';

import Controls from './Controls/Controls';


export default function SlideShow() {
    const [page, setPage] = useState(1);

    const photos = [
        'https://picsum.photos/1600/900?random=1',
        'https://picsum.photos/1600/900?random=2',
        'https://picsum.photos/1600/900?random=3'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setPage(page => page + 1 > photos.length ? 1 : page + 1);
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, [photos.length, page]);

    return (
        <section className="main-slideshow">
            <img
                className="main-slideshow__image"
                src={photos[page - 1]}
                alt={'image-' + page}
            />
            <Controls
                photos={photos}
                page={page}
                setPage={setPage}
            />
        </section>
    );
}
