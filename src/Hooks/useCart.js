import { useState,useEffect } from "react";
import useFirebase from "./useFireBase";
import axios from "axios";

const useCart = () => {
    const user = useFirebase();
    const uid = user.user.uid
    console.log("uid from use cart is ",uid)
    const [cart,setCart] = useState([]);
    const [checking,setChecking] = useState([]);
    


    useEffect(()=>{
        const url = `https://macabre-dungeon-64618.herokuapp.com/get/carts/${uid}`;
        console.log("url in use cart is ",url);
        axios.get(url)
        .then((res)=>{
            const data = res.data;
            setCart(data);
            console.log("use cart data is ", cart);
        })
       
    },[uid,checking])
    return ([cart,setChecking]);
};

export default useCart;