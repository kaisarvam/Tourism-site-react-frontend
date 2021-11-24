import React from 'react';
import axios from 'axios';
import useAllContext from '../../Hooks/useAllContext';

const MyOrders = () => {
  
    const data = useAllContext();
    const orders = data[1][0];
    const setCheck = data[1][1];
   
    let i = 0;
   let total = 0;
   orders.map((order)=>{
    return total = Number(order.price) + total;
   })

   const deleteCart = (id)=>{
       const url =`https://macabre-dungeon-64618.herokuapp.com/delete/carts/${id}`
axios.delete(url)
.then((res)=>{
    console.log("deleted response ",res.data);
    alert("cart is deleted");
    setCheck(res.data)

})

   }

    
    return (
        <div className="m-5 text-light ">
            <h1 className="m-4"> My Orders </h1>
           <table class="table table-dark table-striped">
           <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Orderby</th>
      <th scope="col">Pacage</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Option</th>
      
    </tr>
  </thead>
  <tbody>
      {
          orders.map((order)=>{
              i++;
              return(
                <tr>
                <th scope="row">{i}</th>
                <td>{order?.userName}</td>
                <td>{order?.serviceName}</td>
                {
                    order.status==="Pending"?
                    <td className="text-warning">{order.status}</td>
                    :
                    <td className="text-success">{order.status}</td>
                }
                <td>{order?.price} taka</td>
                <td><button className="btn btn-warning" onClick={()=>{
                    const  result = window.confirm(" want to Delete item from cart ? ");
                    if(result){
                        deleteCart(order._id)
                    }
                    
                    
                    }}>Delete</button></td>
                
              </tr>
              )
          })
      }

      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><strong>Total : {total} taka </strong></td>
          <td></td>
      </tr>
      </tbody>
            </table>
     </div>  
    );
};

export default MyOrders;