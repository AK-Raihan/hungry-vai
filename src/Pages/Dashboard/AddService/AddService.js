import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('https://mighty-cove-82642.herokuapp.com/addService',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('added successfully')
                reset()
            }
        })
    } 
    return (
        <div className="add-service text-center py-5">  
        <h6>Please Add a Food</h6> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue="name" {...register("name")} />
                <textarea placeholder="Description" defaultValue="description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="image url"  {...register("img")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;