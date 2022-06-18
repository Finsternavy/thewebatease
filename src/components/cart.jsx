import { useContext, useState, useEffect } from 'react';
import StoreContext from '../context/storeContext';
import './cart.css'
import ProductsInCart from './productsInCart';
import DataService from '../services/dataService';

const Cart = () => {
    let [allCoupons, setAllCoupons] = useState([]);
    let cart = useContext(StoreContext).cart;
    let [code, setCode] = useState('');
    let [discount, setDiscount] = useState(0);

    const loadCoupons = async() => {
        let service = new DataService();
        let data = await service.getCoupons();
        setAllCoupons(data);
    };

    useEffect(()=>{
        loadCoupons();
    }, []);


    const calcGrandTotal = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++){
            let item = cart[i];
            total += (item.price * item.qty);
        }
        return total;
    }

    const couponChange = (e) => {
        let val = e.target.value;
        console.log(val);

        setCode(val);
    }

    const applyCode = () => {
        let found = false;
        for(let i = 0; i < allCoupons.length; i++){
            let discountCode = allCoupons[i];
            if(discountCode.code == code){
                found = true;
                setDiscount(discountCode.discount / 100);
            }
        }

        if(found){
            console.log("Code Found!", discount);

        }else{
            console.log("Invalid code");
        }
    }

    const calcDiscountPrice = () => {
        let price = calcGrandTotal();
        let newPrice = price - (price * discount);
        return newPrice;
    }

    const calcSavings = () => {
        let price = calcGrandTotal();
        let savings = price * discount;
        return savings;
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
                <input name="coupon-code" onChange={couponChange} type="text" placeholder='Enter Discount Code'/>
                <button className="apply-code" onClick={applyCode}>Apply Code</button>
                <h3>You saved: <span className='dollars'>${calcSavings().toFixed(2)}</span></h3>
                <h3>Total: <span className='dollars'>${calcDiscountPrice().toFixed(2)}</span></h3>
                <button className="pay-btn">Submit Order</button>
            </div>
        </div>
    )
}

export default Cart;