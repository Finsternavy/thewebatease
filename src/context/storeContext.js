import { createContext } from "react";


/* Context: describes the global data
will describe the data structure
promise 
WILL NOT HOLD ANY IMPLEMENTATION */

let StoreContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

export default StoreContext;