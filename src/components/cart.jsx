import { useContext } from 'react';
import StoreContext from '../context/storeContext';
import './cart.css'

const Cart = () => {

    let cart = useContext(StoreContext).cart;

    return (
        <div className='cart'>
            <h1>My Cart</h1>
            <h3>You have {cart.length} products ready for you.</h3>
            {
                // allCoupons.map((coupon) => <li key={coupon.code}>{coupon.code} - {coupon.discount}% Off</li>)
                cart.map((prod, index) => <li key={index}>{prod.title} : ${prod.price}</li>)
            }
            <h3>Place Order</h3>
        </div>
    )
}

export default Cart;