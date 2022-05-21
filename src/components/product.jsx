import { useState, useEffect } from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';

const Product = ({data}) => {

    let [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty(qty + 1);
    }

    const decreaseQty = () => {
        if(qty > 1){
            setQty(qty - 1);
        }
    }

    let [subTotal, setSubTotal] = useState(data.price);

    const calcSubTotal = () => {
        // setSubTotal(Math.round((data.price * qty) * 100) / 100);
        setSubTotal((data.price * qty).toFixed(2));
    }
    
    useEffect(()=>{
        calcSubTotal();
    });

    return (
        <div className='product'>
            <div className="product-img-container">
                <img src={`/img/`+ data.image}  alt="Product Name" className="product-img" />
            </div>
            <div className="product-bottom-container">
                <div className="product-info">
                    <h2 className="product-title">{data.title}</h2>
                    <label className="product-price">${data.price}<span>{data.priceRate}</span></label>
                    <label className="product-total">Sub-Total: ${subTotal}</label>
                </div>
                <div className="product-controls">
                    <QuantityPicker qty={qty} qtyIncrease={() => increaseQty} qtyDecrease={() => decreaseQty}/>
                </div>
                <button className="add-to-cart-btn">Add</button>
            </div>
        </div>
    )    
}

export default Product;