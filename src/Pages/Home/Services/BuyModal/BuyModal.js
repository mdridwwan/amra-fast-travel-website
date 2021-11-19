import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { fontWeight, typography } from '@mui/system';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow: 1
};

const BuyModal = ({ setBuySuccess, product, openProduct, setInsertId, handleProductClose}) => {
    const { titlename, discription, img, cc, price } = product;
    console.log(product)
    const { user } = useAuth();

    const initialInfo = { clientName: user.displayName, email: user.email, }
    const [productInfo, setProductInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);

    }

    const handleProductSubmit = e => {

        // collect data
        const product = {
            ...productInfo,
            productName: titlename,
            price: price,
            img: img,
        }
        // send to the server
        console.log(product)
        fetch('https://rocky-ocean-66909.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setInsertId(data)
                    setBuySuccess(true);
                    handleProductClose()
                }
            });


        e.preventDefault();
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openProduct}
            onClose={handleProductClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openProduct}>
               
                <Box  sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: '50px', color: 'info.main', fontWeight: 500, pb: 3, }} id="transition-modal-title" variant="h6" component="h2">
                        {titlename}
                    </Typography>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                   
                    <Grid item xs={12} md={4} sm={6}>
                            <img width="100%" height="70%" src={img} alt="" srcset="" />
                            <Typography sx={{ color: '#001639', fontSize: '34px', fontWeight: '500'}}>
                                {titlename}
                            </Typography>
                            <Typography sx={{float: 'right', color: 'blue', fontWeight: '600'}}>
                               Price: ${price}
                            </Typography>
                            <Typography sx={{ color: '#830000'}}>
                                1/pr
                            </Typography>
                            <typography>
                                {discription}
                            </typography>
                    </Grid>
                        <Grid item xs={12} md={4} sm={6} >
                            <form onSubmit={handleProductSubmit}>
                                
                                <TextField
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name="clientName"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    size="small"
                                    label="Your Name"
                                    required
                                />
                                <TextField
                                    label="Your Email"
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email}
                                    size="small"
                                    required
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    label="Your Phone Number"
                                    onBlur={handleOnBlur}
                                    name="phone"
                                    size="small"
                                    required
                                />
                                <TextField
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    label="Enter Your address"
                                    onBlur={handleOnBlur}
                                    name="address"
                                    size="small"
                                    required
                                />
                               
                                
                                <Button sx={{ textAlign: 'center' }} type="submit" variant="contained">Submit</Button>
                            </form>
                        </Grid>
                </Grid>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BuyModal;