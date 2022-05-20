import { useState, useEffect } from 'react';
import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(()=>{
        loadCatalog();
    });


    return (
        <div className="catalog">
            <h2>Catalog</h2>
            <h2>We have {products.length} products!</h2>
            <div className="products">
            {
                products.map((product) => <Product  key={product._id} data={product}/>)
            }
            </div>
        </div>
    );
}

export default Catalog;