import './admin.css';
import { useState } from 'react';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState('');
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const saveProduct = () => {
        console.log("Saving product", product);
        let copy = [...allProducts];

        copy.push(product);
        setAllProducts(copy);
    }

    const prodChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    const couponChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        let copy = {...coupon};
        copy[name] = val;
        setCoupon(copy);
    }

    const saveCoupon = () => {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
    <div className="admin">
        <h2>Store Administration</h2>

        <div className="content">
            <section className='admin-form'>
                <h4>Register a New Product</h4>
                <input name='title' onChange={prodChange} type="text" placeholder='Product Title'/>
                <input name='catagory' onChange={prodChange} type="text" placeholder='Catagory'/>
                <div className="image-select">
                    <label>Select a Product Image</label>
                    <input name='image' onChange={prodChange} type="file" accept="image/png, image/jpeg"/>
                </div>
                <div className="price-container">
                    <input name="price" onChange={prodChange} type="number" placeholder='0.00'/>
                    <select name="price-rate" onChange={prodChange}>
                        <option value="/hour">Hour</option>
                        <option value="/month">Month</option>
                        <option value="/each">Each</option>
                        <option value="/session">Session</option>
                    </select>
                </div>
                <button onClick={saveProduct} className='add-product-btn'>Register Product</button>
                <ul>
                    <h1>Products</h1>
                    {
                        allProducts.map((product) => <li key={product.title}>{product.title} - ${product.price}</li>)
                    }
                </ul>
            </section>

            <section className="coupons">
                <h4>Coupon Codes</h4>
                <div className="coupon-container">
                    <input name="code" onChange={couponChange} type="text" placeholder='Enter Coupon Code'/>
                    <input name="discount" onChange={couponChange} type="text" placeholder='Enter Discount %'/>
                    <button onClick={saveCoupon} className="apply-discount-btn">Apply Discount</button>
                </div>

                <ul>
                    <h1>Discount Codes</h1>
                    {
                        allCoupons.map((coupon) => <li key={coupon.code}>{coupon.code} - {coupon.discount}% Off</li>)
                    }
                </ul>
            </section>
        </div>
        

    </div>
    )
}

export default Admin;