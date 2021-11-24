import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
   <div className="bg-violet text-light mt-5 p-5">
       <div className="container-fluid">

  <footer
          className="text-center text-lg-start text-white"
         
          >

    <div className="container-fluid">
     
      <section className="">
   
        <div className="row">
       
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Best Travel Agency
            </h6>
            <p>
              Go places you naver have been ...
            </p>
          </div>
       

          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Our services</h6>
            <p>
              <NavLink to="/international" activeClassName="active" className="text-white">International</NavLink>
            </p>
            <p>
              <NavLink to="/ban" activeClassName="active"  className="text-white">Bangladesh</NavLink>
            </p>
            <p>
              <NavLink to="/gallery/all"  className="text-white">Gallery</NavLink>
            </p>
            <p>
              <NavLink to="/exclusive"  className="text-white">Exclusive services</NavLink>
            </p>
          </div>
        

          <hr className="w-100 clearfix d-md-none" />

        
          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         

        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

         
            <NavLink
               className="btn btn-primary btn-floating m-1"
               
               to="/"
               role="button"
               ><i className="fab fa-facebook-f"></i></NavLink>

            
            <NavLink
               className="btn btn-primary btn-floating m-1"
              
               to="/"
               role="button"
     ><i className="fab fa-twitter"></i
              ></NavLink>

          
            <NavLink
               className="btn btn-primary btn-floating m-1"
               
               to="/"
               role="button"
               ><i className="fab fa-google"></i
              ></NavLink>

          
            <NavLink
               className="btn btn-primary btn-floating m-1"
               
               to="/"
               role="button"
               ><i className="fab fa-instagram"></i
              ></NavLink>

           
            <NavLink
               className="btn btn-primary btn-floating m-1"
               
               to="/"
               role="button"
               ><i className="fab fa-linkedin-in"></i
              ></NavLink>
          
            <NavLink
               className="btn btn-primary btn-floating m-1"
              
               to="/"
               role="button"
               ><i className="fab fa-github"></i
              ></NavLink>
          </div>
        </div>
    
      </section>
   
    </div>


    
    <div
         className="text-center p-3"
        
         >
      © 2021 Copyright : 
      <NavLink className="text-white" to="/kaisar_sarwar"
         > KAISAR SARWAR</NavLink>
    </div>
  
  </footer>

</div>

   </div>
  );
};

export default Footer;
