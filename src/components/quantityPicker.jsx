import './quantityPicker.css';
import { useState } from 'react';

const QuantityPicker = (props) => {
    
    let [qty, setQty] = useState(1);

    const increaseQty = () => {
        let value = qty;
        value = value + 1;
        setQty(value);
        props.onChange(value);
    }

    const decreaseQty = () => {
        let value = qty;

        if(value > 1){
            value = value - 1
            setQty(value);
        }
        props.onChange(value);
    }

    return (
        <div className="quantityPicker">
            <button className="decrease-qty-btn" onClick={decreaseQty} >-</button>
            <label className="qty-label"> {qty} </label>
            <button className="increase-qty-btn" onClick={increaseQty}>+</button>
        </div>
    );
}

export default QuantityPicker;