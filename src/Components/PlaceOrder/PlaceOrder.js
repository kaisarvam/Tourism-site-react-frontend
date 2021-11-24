import React from 'react';
import { useParams } from 'react-router';
import { useEffect ,useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useAllContext from '../../Hooks/useAllContext';
import axios from 'axios';

const PlaceOrder = () => {
    const [contactNumber ,setContactNumber] = useState("")
    const [address,setAddress] = useState("");
    const addressRef = useRef();
    const contactNumberRef = useRef();
    const history = useHistory();
    const [service,setService] = useState([]);
    const data = useAllContext();
    const {user}= data[0];
    const setChecking = data[1][1];
    const {id} = useParams();

    console.log("setchecking is ",setChecking);
    useEffect(()=>{
        const url = `https://macabre-dungeon-64618.herokuapp.com/get/service/${id}`
        axios.get(url)
        .then((res)=>{
            setService(res.data);
        })
    },[id])

    const {uid,displayName} = user;

    const addtocart =(service,uid)=>{
        const cartData = service;
        delete cartData._id
        cartData.uid = uid;
        cartData.contactNumber = contactNumber;
        cartData.addres = address;
        cartData.status = "Pending";
        cartData.userName = displayName;
        const url = "https://macabre-dungeon-64618.herokuapp.com/add/cart"
        axios.post(url,{cartData})
        .then((res)=>{
            setChecking(cartData);
            alert("Item SuccesFully added in cart")
            history.push("/myOrders");
        })
        
        

    }

    const addressSetup = ()=>{
        setAddress(addressRef.current.value);
        console.log("current address : ",addressRef.current.value);
    }
    const contactNumberSetup = ()=>{
        setContactNumber(contactNumberRef.current.value);
        console.log("current Contact number : ",contactNumberRef.current.value);
    }


    return (
        <div className="container text-light">
            <div className="">
            <h1 className="fw-bold m-5"> <span className="text-warning">Order </span> Page</h1>
            <img src={service.image} alt="" className="img-fluid" />
           <div className="card-header text-light">
            <h2> {service.serviceName} </h2>
            <p> {service.description} </p>
            <strong><p>Price : {service.price} taka</p> </strong>
            </div>
            <div className="card-body text-light">
            <h3>Your Informations</h3>
            <h4>Name : {user.displayName}</h4>
            <h4>Email: {user.email}</h4>
            <textarea className="w-75"  onKeyUp={addressSetup} name="Address" placeholder="Enter your Address here ... " ref={addressRef} cols="2" rows="3"></textarea>
            <input type="text" className="w-75"  placeholder="Enter your phone number here ..." onKeyUp={contactNumberSetup} name="ContactNumber" ref={contactNumberRef} />
            <strong><p> Spending amount : {service.price} taka</p> </strong>
            </div>

            

            <button className="btn btn-warning p-3" 
            onClick={(e)=>{
              const  result = window.confirm(" want to add Item to cart ? ");
                if(result){
                    addtocart(service,uid)
                }
                
                }} > <strong> Request purchase </strong></button>
            </div>
        </div>
    );
};

export default PlaceOrder;