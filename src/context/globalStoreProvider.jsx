import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalStoreProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [discountCodes, setDiscountCodes] = useState([]);
    const [user, setUser] = useState({ name: "admin", id: 34 });

    const addProdToCart = (prod) => {
        console.log("Global add prod");
        
        let copy = [...cart];
        let found = false;
        for(let i = 0; i < copy.length; i++){
            let item = copy[i];
            if (item._id === prod._id){
                found = true;
                item.qty += prod.qty;
            } 
        }

        if(!found){
            copy.push(prod);
        }

        setCart(copy);
    };

    const removeProdFromCart = (id) => {
        console.log("Global remove prod");

        let copy = [...cart];
        let found = false;
        console.log(copy);

        for(let i = 0; i < copy.length; i++){
            let item = copy[i];
            console.log(item._id, id);
            if(item._id === id){
                found = true;
                copy.splice(i, 1);
                console.log(copy);
            }
        };
        
        if(found){
            console.log("Found it!");
        }else{
            console.log("Couldn't find the product");
        }
        setCart(copy);
    };

    const addDiscountCode = (code) => {
        let copy = [...discountCodes];
        copy.push(code);
        setDiscountCodes(copy);
    };

    const removeDiscountCode = () => {
        console.log("Global remove discount code");
    };

    return(
        <StoreContext.Provider value={{
            cart: cart,
            discountCodes: discountCodes,
            user: user,

            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            addDiscountCode: addDiscountCode,
            removeDiscountCode: removeDiscountCode
        }}>
            {props.children}
        </StoreContext.Provider>  
    )
};

export default GlobalStoreProvider;