
import React, { useState, useEffect } from 'react';




const ManageAllOrder = () => {
    const[orders, setOrders]=useState([])
    const[status, setStatus]=useState('')

    const handleStatus = (e)=>{
        setStatus(e.target.value);
    }


 

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('successfully deleted');
            }
          });
        console.log(id);
      };

      const handleUpdate= (id)=>{
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({status}),
        })

    }

    return (
        <div style={{marginBottom:'300px'}}>
            <h2>Orders: {orders.length}</h2>
            <div className='container' >
                <table class="table">
                    <thead>
                        <tr className="text-start">
                            <th>User</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th className='text-end' scope="col">Status</th>
                            <th className='text-end' scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr
                                key={order._id}
                            >
                                <th >
                                    {order.user}
                                </th>
                                <th >{order.email}</th>
                                <th >{order.date}</th>
                                <th >{order.name}</th>
                                <input onBlur={handleStatus} type="text" className='border-0 w-25' defaultValue={order.status} /> 
                                <button onClick={() => handleDelete(order?._id)} className="btn btn-outline-danger text-end">Remove</button>
                <button onClick={()=> handleUpdate(order?._id)}   className="btn btn-outline-success text-end">Update</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;






                
                        