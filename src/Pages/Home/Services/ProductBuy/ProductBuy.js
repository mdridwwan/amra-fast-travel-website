import { Grid, Paper, Typography, Button } from '@mui/material';
import { Box, typography } from '@mui/system';
import React from 'react';
import BuyModal from '../BuyModal/BuyModal'


const ProductBuy = ({ product, setBuySuccess, setInsertId}) => {
    const { titlename, price, img, discription, tourname} = product;
    const [openProduct, setOpenProduct] = React.useState(false);
    const handleProductOpen = () => setOpenProduct(true);
    const handleProductClose = () => setOpenProduct(false);
    return (
       
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ pb: 2, }} >
                    
                    <img width="100%" height="200px" src={img} alt="" srcset="" />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1, }}>
                        <Typography variant="h4" sx={{ color: '#003404', fontWeight: 600, fontSize: '20px' }} gutterBottom component="div">
                            {titlename}
                        </Typography>
                        <Typography style={{ color: 'rgb(173 0 0)', fontWeight:'700'}}>
                            $ {price}
                        </Typography>
                        <Typography style={{ color: 'rgb(61 0 55)'}}>
                           1/pr
                        </Typography>
                    </Box>
                    <Typography variant="p">
                        {discription.slice(0,100)}..
                    </Typography>
                    <Button onClick={handleProductOpen} variant="contained" sx={{ backgroundColor: '#790b0b', width: '95%', marginTop: '10px' }}>{tourname}</Button>
                </Paper>
            </Grid>

            <BuyModal
                setBuySuccess={setBuySuccess}
                product={product}
                openProduct={openProduct}
                setInsertId={setInsertId}
                handleProductClose={handleProductClose}
            ></BuyModal>
        </>
    );
};

export default ProductBuy;