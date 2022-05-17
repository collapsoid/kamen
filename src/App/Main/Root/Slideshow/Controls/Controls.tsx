import './styles.css';


interface IControls {
    photos: string[];
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Controls({photos, page, setPage}: IControls) {
    return (
        <div className="main-slideshow-controls">
            <ul className="main-slideshow-controls__list">
                {photos.map((photo, idx) => (
                    <li
                        key={`${photo}-${idx}`}
                        className={
                            "main-slideshow-controls__list-item"
                            + (page === idx + 1 ? ' main-slideshow-controls__list-item_active' : '')
                        }
                        onClick={() => setPage(idx + 1)}
                    />
                ))}
            </ul>
        </div>
    );
}
