import './product.css';
import QuantityPicker from './quantityPicker';

const Product = () => {
    return (
        <div className='product'>
            <div className="product-img-container">
                <img src="https://picsum.photos/250/200" alt="Product Name" className="product-img" />
            </div>
            <div className="product-bottom-container">
                <div className="product-info">
                    <h3 className="product-title">Product Title</h3>
                    <label className="product-price">$Free.99</label>
                    <label className="product-total">Total</label>
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