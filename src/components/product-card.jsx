import {Badge} from "./badge.jsx";

export const ProductCard = ({productName , productDescription , productPrice , productBadge}) => {
    return (
        <>
            <div className="product-card">
                <Badge productBadge={productBadge} />
                <div className="product-card__name">
                    {productName}
                </div>
                <div className="product-card__description">
                    {productDescription}
                </div>
                <div className="product-card__price">
                    {productPrice}
                </div>
            </div>
        </>
    )
}
