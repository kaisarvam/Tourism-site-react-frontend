import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useAllContext from '../../Hooks/useAllContext';
import './AllOrder.css';

const AllOrder = () => {
    const [read ,setRead] = useState([]);
    const data = useAllContext();
    const setCheck = data[1][1];
    const [allOrder,setAllOrder] = useState([]);

    const deleteCart = (id)=>{
        const url =`https://macabre-dungeon-64618.herokuapp.com/delete/carts/${id}`
 axios.delete(url)
 .then((res)=>{
     console.log("deleted response ",res.data);
     alert("cart is deleted");
     setCheck(res.data)
     setRead(res.data)
 
 })
 
    }


    useEffect(()=>{
       
        const url = "https://macabre-dungeon-64618.herokuapp.com/view/carts";
        axios.get(url)
        .then((res)=>{
            setAllOrder(res.data)
            console.log("from all order page",allOrder);
        })
    },[read])

    const updateOrderStatus = (order)=>{
      const data = order;
      data.status = "Approved";
      const url = `https://macabre-dungeon-64618.herokuapp.com/update/cart/${data._id}`
      axios.put(url,{data})
      .then((res)=>{
          alert("Status Updated Successfully !!! ")
          setCheck(res.data);
         
      })
      
    }
    return (
        <div className="text-light">
           <strong className="fw-bold"> <h1 className="m-5">Manage All <span className="text-warning"> Order </span> </h1> </strong>
            {
                allOrder.map((order)=>{
        return(
            <div className="container">
            <div className="card m-2 bg-dark text-light border-3 border-info rounded-3">
               
                <div className="card-body  ">
                <h3>{order.serviceName}</h3>
                <p> Ordered by : {order.userName} </p>
                <p> Price : {order.price} taka </p>
                 {
                   order.status==="Pending" ? 
                   <button className="btn btn-warning btn-shadow-white ms-2" onClick={()=>{updateOrderStatus(order)}}> {order.status} </button>
                   :
                   <button className="btn btn-success ms-2"> {order.status} </button>
                 }
                 <button className="btn btn-danger btn-shadow-white ms-4" onClick={()=>{
                     const  result = window.confirm(" want to Delete item from cart ? ");
                     if(result){
                        deleteCart(order._id)
                     }
                 }}>Delete</button>
                 
                 </div>
              </div>
              </div>
            )
                })
            }
        </div>
    );
};

export default AllOrder;