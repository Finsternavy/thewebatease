import { useContext, useState } from 'react';
import StoreContext from '../context/storeContext';
import './cart.css'
import ProductsInCart from './productsInCart';

const Cart = () => {
    
    let cart = useContext(StoreContext).cart;

    const calcGrandTotal = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++){
            let item = cart[i];
            total += (item.price * item.qty);
        }
        return total;
    }

    return (
        <div className="cart-container">
            <div className='cart'>
                <h1>My Cart</h1>
                {
                    // allCoupons.map((coupon) => <li key={coupon.code}>{coupon.code} - {coupon.discount}% Off</li>)
                    cart.map((prod) => (<ProductsInCart data={prod} key={prod._id}></ProductsInCart>))
                }
            </div>
                
            <div className='order-summary'>
                <h2 className='estimated-total'>Estimated Total: <span className='grand-total'>${calcGrandTotal().toFixed(2)}</span></h2>
                <h3>Request Services</h3>
            </div>
        </div>
    )
}

export default Cart;