import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFireBase';
import useCart from '../Hooks/useCart';


export const AllDataContext = createContext();

const AllContext = ({children}) => {
    console.log("all context called !!!");
 
    const FireBase = useFirebase();
    const cart = useCart();
    
    console.log("from all context Firebase is is ",FireBase);
    return (
        <AllDataContext.Provider value={[FireBase,cart]}>
            {children}
        </AllDataContext.Provider>
    );
};

export default AllContext;