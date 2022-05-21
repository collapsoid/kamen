import './styles.css';

import { NavSidebar } from '../../../shared/Navigation';


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
        <div className="product-page">
            <div className="product-page__sidebar">
                <NavSidebar
                    sections={[{
                        title: 'Готовая продукция',
                        items: productItems
                    }]}
                />
            </div>
            <div className="product-page__content">
                {productItems.map(item => (
                    <section key={item.anchor}>
                        <a id={item.anchor}>&nbsp;</a>
                        <h2>{item.title}</h2>
                    </section>
                ))}
            </div>
        </div>
    );
}
