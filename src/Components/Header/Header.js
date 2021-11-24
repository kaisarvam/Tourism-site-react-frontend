import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';
import useAllContext from '../../Hooks/useAllContext';


import './Header.css';


const Header = () => {
  const [cart,setCart] = useState([]);
  const data = useAllContext()
  const {user,LogOut} = data[0];
  const cartData = data[1][0];
 useEffect(()=>{
   console.log("setcart header use effect called !!!");
   setCart(cartData)
 },[cartData])
  
  console.log("cart is",cart);
  
 
    return (
        <div className="sticky-top mb-5 ">
              <header className="p-3 bg-violet text-white ">
    <div className="container-fluid ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start navbar">
        <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <img src="" alt="" />
        </NavLink>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/home"  activeClassName="active"  className="nav-link px-2 text-white">Home</NavLink></li>

        {
          user?.displayName && <li><NavLink className="nav-link px-2 text-white" to="/service/create">Add A New Service</NavLink></li>
        }
        
 
          
          <li><NavLink to="/locationGallery" activeClassName="active" className="nav-link px-2 text-white"> Locations Gallery</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" className="nav-link px-2 text-white">About Us</NavLink></li>

{
  user.email?
  <div className="dropdown">
  <button  activeClassName="active" className="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Order Options
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink className="dropdown-item" to="/myOrders">My Orders</NavLink></li>
    <li><NavLink className="dropdown-item" to="/allOrders">Manage All Orders</NavLink></li>
   
  </ul>
</div>
:
<> </>
}
  




          <li><NavLink to="/faq" activeClassName="active" className="nav-link px-2 text-white">FAQ</NavLink></li>
          {
            user?.displayName && <li className="margin-username"> logged as <strong> {user.displayName} <img className="user-img" src={user?.photoURL} alt=""></img> </strong></li>
            }
        </ul>

        

        <div className="text-end">
          {
            !user?.displayName &&
             <> 
            <NavLink to="/login" activeClassName="inactive"> <button type="button" className="btn btn-outline-light me-2"><strong>Login</strong></button> </NavLink>
           <NavLink to="/signup" activeClassName="inactive" > <button type="button" className="btn btn-warning"><strong>Sign-up </strong></button> </NavLink>
         </>
          }
          <NavLink to="/myOrders" activeClassName="inactive" > <button type="button" className="btn bg-warning mx-2"> <i className="fas fa-shopping-cart"></i> <strong>Cart </strong><strong className="badge badge-pill badge-dark bg-dark badge-shadow">{cart.length}</strong> </button> </NavLink>
         {
           user?.displayName && <> 
  <button type="button" onClick={LogOut} className="btn btn-outline-light btn-danger text-dark me-2"><strong>Logout </strong></button>
           </>
         }
         
        </div>
      </div>
    </div>
  </header>
        </div>
    );
};

export default Header;