
import { Alert, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductBuy from '../ProductBuy/ProductBuy';

const Services = () => {
    const [buySuccess, setBuySuccess] = useState(false);
    const [insertId, setInsertId] = useState({})

   const [services, setServices] = useState([])

    useEffect(()=>{
        const url =`https://rocky-ocean-66909.herokuapp.com/services`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    console.log(services)
    return (
        <Container>
            <Typography class="shadow p-3 mb-4 mt-5 bg-body rounded fw-bolder text-success" >
                <h2 style={{fontSize: '50px'}}>FEATURED TOURS</h2>
                <p style={{ color: '#7d7d7d'}}>Find your next tour</p>
            </Typography>
            <Typography class=" mb-4 fs-2 bg-body rounded fw-bolder" style={{ color: '#5b0000e0', fontFamily: 'cursive'}}>
                Available Service on 
            </Typography>
            {buySuccess && <Alert severity="success">Buy successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    services.map(product => <ProductBuy
                        key={product._id}
                        product={product}
                        setInsertId={setInsertId}
                        setBuySuccess={setBuySuccess}
                    ></ProductBuy>)
                }
            </Grid>
        </Container>
    );
};

export default Services;