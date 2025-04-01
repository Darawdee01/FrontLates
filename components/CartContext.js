import { cartContext, createContext, useState } from "react";

export const CatContext = createContext({});

export function CatContextProvider({children}){
    const [cartProducts,setCartProducts] = useState([]);
    return(
        <cartContext.Provider value={{cartProducts}}>
            {children}
        </cartContext.Provider>
    )
}