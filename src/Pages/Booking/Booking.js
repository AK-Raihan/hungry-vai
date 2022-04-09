
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import useFirebase from "../../hooks/useFirebase";

const Booking = () => {
    const{user}=useFirebase();
    const { productId } = useParams();
    const [product, setProduct] = useState({ date:""});
    // console.log(user);
    delete product._id;
    console.log(product);

    
  
    useEffect(() => {
      fetch(`https://mighty-cove-82642.herokuapp.com/singleProduct/${productId}`)
        .then((res) => res.json())
        .then((result) =>{ 
          setProduct(result)
        });
    }, []);
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({defaultValues: product});




    const onSubmit = (data) => {
      console.log(data);
    data.status = "pending";
    
        fetch("https://mighty-cove-82642.herokuapp.com/confirmOrder", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId){
              console.log(result.insertedId)
            }
          });
      };
    return (
        <div>

        <h4 className="my-4 text-center">Please order your favourite food</h4>
  
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="booking-order">
              <div className="details-img">
                <img className="w-75" src={product?.img} alt="" />
              </div>
              <h5>{product?.name}</h5>
              <p className="text-start">{product?.description}</p>
              <h6> price: {product?.price} </h6>
              </div>

            </div>
            <div className="col-md-6 bg-info p-3">
              <h6>Order submit form</h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("user")}
                  defaultValue={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("name")}
                  defaultValue={product?.name}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("date")}
                  // placeholder="Name"
                  type="date"
                  className="p-2 m-2 w-100"
                />
                <br />
                
  
                <input
                  {...register("price" )}
                  defaultValue={product?.price}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("image")}
                  defaultValue={product?.img}
                  className="p-2 m-2 w-100"
                />
                <br />
                <textarea
                  {...register("comments")}
                  placeholder="comments"
                  className="p-2 m-2 w-100"
                />
                <br />
  
                {errors.exampleRequired && <span>This field is required</span>}
  
                <input
                  type="submit"
                  value="Order Confirm"
                  className="btn btn-success w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;