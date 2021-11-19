import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const MyOrders = () => {
    const { user } = useAuth();
   // console.log(user)
    const [orders, setOrders] = useState([]);
   const [deleteOrderSuccess, setDeleteOrderSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const url = `https://rocky-ocean-66909.herokuapp.com/order?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            })
    }, [])

    const handleWithOrderCencel = (id) =>{
        console.log('cencel', id)
        const url = `https://rocky-ocean-66909.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    setDeleteOrderSuccess(true)
                }
            })
    }

   
    return (
        <div>
            <Navigation></Navigation>
            <span class="shadow fs-1 px-5 py-3 rounded-pill text-success fw-bold">MY ORDER AREA</span>
            <img height="350px" src={`https://i.dlpng.com/static/png/6899649_preview.png`} alt="" srcset="" />
            {deleteOrderSuccess && <Alert severity="success">Successfully Delete Order!</Alert>}
            <div class='p-5' style={{ background: '#f3f3f3'}}>
                <div class="container ">
                    <div class="row  ">
                        
                        {
                            orders.map(order => <div key={order._id} class="col-12 d-flex col-md-5 m-2 bg-light shadow">
                                
                                <div class="col-4">
                                    <img width="100%" src={order.img} alt="" srcset="" />
                                </div>
                                <div class="col-8 p-2">
                                    <h4 class="fs-5 fw-bold">{order.productName}</h4>
                                    <p class="text-success">$ {order.price}</p>
                                    <button onClick={() =>handleWithOrderCencel(order._id)} class="bg-danger rounded border-0 px-3 text-light">X</button>
                                </div>
                            </div>)
                        }
                       
                    </div>
                </div>
                {
                    isLoading && <CircularProgress color="secondary" />
                }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MyOrders;