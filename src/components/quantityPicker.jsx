import './quantityPicker.css';

const QuantityPicker = (props) => {

    return (
        <div className="quantityPicker">
            <button className="decrease-qty-btn" onClick={props.qtyDecrease()}>-</button>
            <label className="qty-label"> {props.qty} </label>
            <button className="increase-qty-btn" onClick={props.qtyIncrease()}>+</button>
        </div>
    );
}

export default QuantityPicker;