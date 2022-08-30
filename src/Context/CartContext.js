import { createContext } from "react";


const CartContext = createContext();

const CartContextProvider = ({children})=>{

    // items state
    // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
    // make functions addToCart and removeFromCart

    const values = {

    }

    return (<CartContextProvider value={values}>{children}</CartContextProvider>)
}