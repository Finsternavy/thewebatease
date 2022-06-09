import { useContext, useState } from 'react';
import StoreContext from '../context/storeContext';
import './cart.css'

const Cart = () => {

    let cart = useContext(StoreContext).cart;

    let [subTotal, setSubTotal] = useState([]);

    const calcProdTotal = (prod) => {
        let prodSubTotal = prod.price * prod.qty;
        return prodSubTotal;
    }

    const calcGrandTotal = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++){
            total += (cart[i].price * cart[i].qty);
        }
        return total;
    }

    return (
        <div className='cart'>
            <h1>My Cart</h1>
            <h2>There are {cart.length} products ready for you.</h2>
            {
                // allCoupons.map((coupon) => <li key={coupon.code}>{coupon.code} - {coupon.discount}% Off</li>)
                cart.map((prod, index) => (
                    <li key={index} className="cart-item">
                        <label><span className='prod-title'>{prod.title}</span> :</label>
                        <label> ${prod.price} * <span className='prod-price'>{prod.qty}</span> = ${calcProdTotal(prod).toFixed(2)}</label>
                    </li>))
            }
            <h2>Estimated Total: <span className='grand-total'>${calcGrandTotal().toFixed(2)}</span></h2>
            
            <h3>Request Services</h3>
        </div>
    )
}

export default Cart;