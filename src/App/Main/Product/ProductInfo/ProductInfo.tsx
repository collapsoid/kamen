import './styles.css';


interface IProductInfo {
    title: string;
    description: string;
    src: string;
}

export default function ProductInfo({title, description, src}: IProductInfo) {
    return (
        <article className="product-info">
            <div className="product-info__image-container">
                <img className="product-info__image" src={src} alt={title} />
                <h2 className="product-info__title">
                    {title}
                </h2>
            </div>
            <p className="product-info__description">
                {description}
            </p>
        </article>
    );
}
