import React from 'react';
import Rating from 'react-rating';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';
import './ServiceDisplay.css';

const ServiceDisplay = ({service}) => {

   
    return (
        <Zoom bottom cascade>
        <div className="col-md-6 col-xl-4 col-xxl-3 col-12  text-center">
            <div class="card card-height bg-dark text-light" >
    <img class="img-thumbnail service-image" src={service?.image} alt="" />
    <div class="card-body">
      <h4 class="card-title">{service?.serviceName}</h4>
      <p>Created by : {service?.creatorName}</p>
      <h5>{service?.country}</h5>
      <p class="card-text">{service?.description.slice(0,140)}...</p>
      <div>
      <span className="fw-bold">Rating :</span><strong className="ps-3">{service?.rating}</strong>
      </div>
      <Rating 
      initialRating = {Number(service?.rating)}
      readonly
     fullSymbol="fas fa-star text-warning"
     emptySymbol="far fa-star text-warning"
      />
      <p>Price : {service.price} taka</p>
      <p>Rated : {service.rated}</p>
      </div>
      <div className="d-flex justify-content-evenly card-footer ">
      <NavLink to={`/service/update/${service._id}`} className="btn  btn-outline-light text-dark fw-bold btn-info shadow-btn ">
             Update Service
            </NavLink>
                <NavLink className="btn btn-success btn-outline-light text-dark fw-bold shadow-btn" to={`/orderItem/${service._id}`} >Order Now</NavLink>
             
            
            </div>

            </div>

           
        </div>
        </Zoom>
     
    );
};

export default ServiceDisplay;