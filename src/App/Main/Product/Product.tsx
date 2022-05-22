import './styles.css';

import { NavSidebar } from '../../../shared/Navigation';
import ProductInfo from './ProductInfo/ProductInfo';


export const productItems = [
    {anchor: 'slab', title: 'Слэбы'},
    {anchor: 'plate', title: 'Плита'},
    {anchor: 'paving', title: 'Брусчатка'},
    {anchor: 'border', title: 'Бордюры'},
    {anchor: 'counertop', title: 'Столешницы'},
    {anchor: 'portal', title: 'Порталы'},
    {anchor: 'other', title: 'Другое'}
];

export default function Product() {
    return (
        <article className="product-page">
            <NavSidebar
                sections={[{
                    title: 'Готовая продукция',
                    items: productItems
                }]}
                threshold={200}
            />
            <div className="product-page__content">
                {productItems.map((item, idx) => (
                    <div key={item.anchor} className="product-page__product-info">
                        <a id={item.anchor}>&nbsp;</a>
                        <ProductInfo
                            title={item.title}
                            description={item.title}
                            src={`https://picsum.photos/1600/900?random=${idx}`}
                        />
                    </div>
                ))}
            </div>
        </article>
    );
}
