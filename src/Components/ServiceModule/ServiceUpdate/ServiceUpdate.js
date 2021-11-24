import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState ,useEffect} from 'react';


const ServiceUpdate = () => {
    const {id} = useParams();
  const [service,setService] = useState([]);
useEffect(()=>{
    const url = `https://macabre-dungeon-64618.herokuapp.com/get/service/${id}`
    axios.get(url)
    .then((res)=>{
        console.log("found data in update :",res.data);
        setService(res.data);
    })
},[id])

console.log("service here is : ",service.country);

  const history = useHistory();
    const { register,handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data);

        const url = `https://macabre-dungeon-64618.herokuapp.com/update/service/${id}`
    axios.put(url,{data})
    .then((res)=>{
        console.log("result is: ",res);
        if(res.data.acknowledged){
            alert("data Updated successfully");
            history.push('/home');
        }
       
    })
    
    
    }


    const controlHeight = (e)=>{
        e.target.style.height = "";
       e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
    }

    return (

        <div className="text-light">
         
            <h1 className="m-5">Service Update Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
       <h3> Service Name </h3>
      <input className="mb-3 w-50 rounded p-2" defaultValue={service?.serviceName} {...register("serviceName", { required: true })} />
      <br/>
      {errors.serviceName && <span className="text-danger ">This field is required <br/> </span>}
      <h3> Service Category </h3>
      <select className="mb-3 w-50 rounded p-2" {...register("country")}>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Maldives">Maldives</option>
        <option value="Switzerland">Switzerland </option>
        <option value="Nepal">Nepal </option>
    
      </select>
      <br/>
      <h3> Service Image URL </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={service?.image} {...register("image", { required: true })} />
      <br/>
      {errors.image && <span className="text-danger ">This field is required <br/> </span>}
      <h3> Service Description </h3>
      <textarea className="mb-3 w-50 rounded p-2"  defaultValue={service?.description} onKeyUp={(e)=>{controlHeight(e)}}  {...register("description", { required: true })} />
      <br/>
      {errors.description && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Price </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={service?.price} {...register("price",{ required: true })} />
      <br/>
      {errors.price && <span className="text-danger ">This field is required <br/> </span>}
      <h3> Service Rating </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={service?.rating} {...register("rating",{ required: true })} />
      <br/>
      {errors.rating && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Rated </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={service?.rated} {...register("rated", { required: true })} />
      <br/>
      {errors.rated && <span className="text-danger">This field is required <br/> </span>}
      
      
      <br/>

      

      <input className="btn btn-success w-50" type="submit" />
    </form>  
   
        </div>
       
    );
};

export default ServiceUpdate;