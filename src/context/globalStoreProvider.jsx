import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalStoreProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "admin", id: 34 });

    const addProdToCart = (prod) => {
        console.log("Global add prod");
        
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("Global remove prod");
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            user: user,

            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>  
    )
};

export default GlobalStoreProvider;