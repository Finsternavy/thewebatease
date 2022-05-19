import './product.css';
import QuantityPicker from './quantityPicker';

const Product = ({data}) => {

    return (
        <div className='product'>
            <div className="product-img-container">
                <img src={`/img/`+ data.image}  alt="Product Name" className="product-img" />
            </div>
            <div className="product-bottom-container">
                <div className="product-info">
                    <h2 className="product-title">{data.title}</h2>
                    <label className="product-price">${data.price}</label>
                    <label className="product-total">Sub-Total</label>
                </div>
                <div className="product-controls">
                    <QuantityPicker/>
                </div>
                <button className="add-to-cart-btn">Add</button>
            </div>
        </div>
    )    
}

export default Product;