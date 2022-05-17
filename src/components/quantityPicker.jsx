import { useState } from 'react';
import './quantityPicker.css';

const QuantityPicker = () => {

    let [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty(qty + 1);
    }

    const decreaseQty = () => {
        if(qty > 1){
            setQty(qty - 1);
        }
    }

    return (
        <div className="quantityPicker">
            <button className="decrease-qty-btn" onClick={decreaseQty}>-</button>
            <label className="qty-label"> {qty} </label>
            <button className="increase-qty-btn" onClick={increaseQty}>+</button>
        </div>
    );
}

export default QuantityPicker;