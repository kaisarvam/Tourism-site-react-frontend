import React from 'react';
import axios from 'axios';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';
import { useState,useEffect } from 'react';

const Services = () => {
    const [servicesAll,setServicesAll] = useState([]);

    useEffect(()=>{
        const url ='https://macabre-dungeon-64618.herokuapp.com/view/services';
axios.get(url)
.then((res)=>{
    console.log("found services are :",res.data);
    setServicesAll(res.data);
})
    },[])
    console.log("services found here  : ",servicesAll.length);
    return (
        <div>
           <strong> <h1 className="m-5 fw-bold text-light"> All <span className="text-warning">Services</span></h1> </strong>
           <p className="text-light m-4">Bangladesh is a wonderful country. It has many sights of historical value and beauty. Some of them are very famous, and other people don’t even know about it. It cradles the largest mangrove swamp in the world, Buddhist kingdoms dated back to the 3rd century B.C., lush tea plantations, stunning beaches, temples with full of terracotta in the walls, mosques, and it’s people – most generous and open-hearted you’ll meet. In this article, we listed Bangladesh tourist places.Here are also some other places you may like to visit </p>
           <hr/>
           <br/>
            <div className="row g-3 ">
                {
                    servicesAll.length>1?
                    <> </>
                    :
                    <div className="container" >
                    <h4 class=" spinner-border text-info" role="status">
                  </h4>
                  <p className="text-light">Connecting database ...</p>
                  </div>
                }
            {
                servicesAll.map((service)=>{
                    return(
                        <ServiceDisplay service={service}></ServiceDisplay>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Services;