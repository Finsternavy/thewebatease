import { useContext } from 'react';
import StoreContext from '../context/storeContext';
import './productsInCart.css';

const ProductsInCart = ({data}) => {
    const removeProdFromCart = useContext(StoreContext).removeProdFromCart;

    let img = '/img/' + data.image;

    let getTotal = () => {
        let subTotal = data.price * data.qty;
        return subTotal.toFixed(2);
    }

    const deleteProd = () => {
        removeProdFromCart(data._id);
    }

    return(
        <div className="products-in-cart">
            <div className="product-img">
                <img src={img} alt="product" />
            </div>
            <div className="product-info">
                <p>{data.title}</p>
                <p>${data.price}{data.priceRate}</p>
                <p>qty: {data.qty}</p>
                <p className='subTotal'>${getTotal()}</p>
                <button className="delete-product" onClick={deleteProd}>Remove</button>
            </div>

        </div>
    )
}

export default ProductsInCart;