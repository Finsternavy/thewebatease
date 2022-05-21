import { useState} from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';

const Product = ({data}) => {

    let [qty, setQty] = useState(1);

    let onQtyChange = (value)=> {
        // use the value to update the quantityPicker value
        setQty(value);
    }

    const calcTotal = () => {
        return (data.price * qty).toFixed(2);
    }

    return (
        <div className='product'>
            <div className="product-img-container">
                <img src={`/img/`+ data.image}  alt="Product Name" className="product-img" />
            </div>
            <div className="product-bottom-container">
                <div className="product-info">
                    <h2 className="product-title">{data.title}</h2>
                    <label className="product-price">${data.price}<span>{data.priceRate}</span></label>
                    <label className="product-total">Sub-Total: ${calcTotal()}</label>
                </div>
                <div className="product-controls">
                    <QuantityPicker onChange={onQtyChange}/>
                    
                </div>
                <button className="add-to-cart-btn">Add</button>
            </div>
        </div>
    )    
}

export default Product;