import ShopItem from "../ShopItem.component/ShopItem.component";

const ShopList = ({ shoes }) => {
    return (
        <div className="shop-content">
            <div className="products">
                {shoes.map((shoe) => {
                    return <ShopItem key={shoe.id} shoe={shoe} />
                })}
            </div>
        </div>

    )
};

export default ShopList;