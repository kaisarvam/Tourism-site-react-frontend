import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAllContext from '../../../Hooks/useAllContext';

const ServiceCreate = () => {
    const data = useAllContext();
    const {user} = data[0];
    const { register,handleSubmit,formState: { errors },reset } = useForm();
    const onSubmit = data => {
        const sendData = data;
        sendData.creatorName = user?.displayName;
        sendData.creatorEmail = user?.email;
        console.log(data);

        const url = "https://macabre-dungeon-64618.herokuapp.com/add/service"
    axios.post(url,{...sendData})
    .then((res)=>{
        console.log("result is: ",res);
        if(res.data.insertedId){
            alert("data added successfully");
            reset();
        }
       
    })
    
    
    }


    const controlHeight = (e)=>{
        e.target.style.height = "";
       e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
    }

    return (
        
        <div className="text-light">
           <strong> <h1 className="m-5 fw-bold">Service <span className="text-warning"> Create </span> Page </h1> </strong>
            <form onSubmit={handleSubmit(onSubmit)}>
            
       <h3> Service Name </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("serviceName", { required: true })} />
      <br/>
      {errors.serviceName && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Category </h3>
      <select className="mb-3 w-50 rounded p-2" {...register("country")}>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Maldives">Maldives</option>
        <option value="Switzerland">Switzerland </option>
        <option value="Nepal">Nepal </option>
        <option value="Sikkim">Sikkim </option>
        <option value="India">India </option>
        <option value="USA">USA </option>
    
      </select>
      <br/>
      <h3> Service Image URL </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("image", { required: true })} />
      <br/>
      {errors.image && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Description </h3>
      <textarea className="mb-3 w-50 rounded p-2" onKeyUp={(e)=>{controlHeight(e)}}  {...register("description", { required: true })} />
      <br/>
      {errors.description && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Price </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("price", { required: true })} />
      <br/>
      {errors.price && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Rating </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("rating",{ required: true })} />
      <br/>
      {errors.rating && <span className="text-danger">This field is required <br/> </span>}
      <h3> Service Rated </h3>
      <input className="mb-3 w-50 rounded p-2" type="number" {...register("rated",{ required: true })} />
      <br/>
      {errors.rated && <span className="text-danger">This field is required <br/> </span>}
      
      
      <br/>

      

      <input className="btn btn-success w-50" type="submit" />
      
    </form>  
        </div>
        
    );
};

export default ServiceCreate;