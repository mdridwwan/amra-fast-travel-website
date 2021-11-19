import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ManagesAllOrder = () => {
    const [deleteOrderSuccess, setDeleteOrderSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        const url = 'http://localhost:5000/allorder'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
                setIsLoading(false)
            })
    }, [])
    const handleWithOrderCencel = (id) => {
        console.log('cencel', id)
        const url = `http://localhost:5000/order/${id}`;
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
    console.log(allOrder)
    return (
        <div style={{ background: '#f3f3f3' }}>
            <Navigation></Navigation>
            <span class="shadow fs-1 px-5 py-3 rounded-pill text-success fw-bold col-sm-12">ORDER MANAGEMENT</span>
            <img height="350px" src={`https://icon-library.com/images/orders-icon/orders-icon-5.jpg`} alt="" srcset="" />
            <div className="container">{deleteOrderSuccess && <Alert severity="success">Successfully Delete Order!</Alert>}</div>
            {
                isLoading && <CircularProgress color="secondary" />
            }
            <div class="container pt-5">
                <div class="row ">
                    {
                        allOrder.map(order => <div 
                            class="col-12 d-flex col-md-12 m-2 bg-light shadow py-4 d-flex justify-content-between align-items-center"
                        >
                            <div class="d-flex">
                                <div>
                                    <img height="100%" width="100px"  class="rounded-pill" src={order.img} alt="" srcset="" />
                                </div>
                                <div>
                                    <h4 class="text-success fw-bolder">{order.productName}</h4>
                                    <h6 class="pt-4 text-primary">{order.email}</h6>
                                </div>
                                </div>
                                <div class="">
                                <h6 class="fs-5 mb-3 text-primary"><img width="30px" src="https://proofmart.com/wp-content/uploads/2021/06/phone-icon-product.png" alt="" srcset="" /> {order.phone}</h6>
                                <h4 class="" style={{ color: '#ad0000'}}>$ {order.price}</h4>
                                </div>
                                <div class=" ">
                                <button onClick={() => handleWithOrderCencel(order._id)} style={{color: 'red'}} class="border-0 rounded fs-3 px-4 mx-5">X</button>
                                </div>
                        </div>
                             )
                    }
                    
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManagesAllOrder;