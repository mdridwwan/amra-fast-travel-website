import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Alert, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';


const AddService = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [addProductSuccess, setAddPRoductSuccess] = useState(false);

        const [product, setProduct] = useState({})
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newInfo = { ...product };
              newInfo[field] = value;
            setProduct(newInfo);
           
        }
        console.log(product)

        const handleProductSubmit = e => {
            setAddPRoductSuccess(false)
            setIsLoading(true)
            // send to the server
            console.log(product)
            fetch('http://localhost:5000/servicesadd', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setAddPRoductSuccess(true)
                        setIsLoading(false)
                        
                    }
                });

            e.preventDefault();
        }

    return (
        <div>
            <Navigation></Navigation>
            <h2>Add SErvice</h2>

            
                <h2>Add an product</h2>
                {addProductSuccess && <Alert severity="success">Successfully Add Product Database!</Alert>}
                <form onSubmit={handleProductSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="outlined-size-small"
                         name="titlename"
                        onBlur={handleOnBlur}
                        label="Service Name"
                        size="small"
                        variant="outlined"
                    required
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        label="Price"
                        size="small"
                        variant="outlined"
                    required
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="outlined-size-small"
                        name="star"
                        onBlur={handleOnBlur}
                        label="Service Ratting"
                        size="small"
                        variant="outlined"
                    required
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="outlined-size-small"
                        name="img"
                        onBlur={handleOnBlur}
                        label="Image URL"
                        size="small"
                        variant="outlined"
                    required
                        />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="outlined-size-small"
                         name="tourname"
                        onBlur={handleOnBlur}
                        label="Button Name"
                        size="small"
                        variant="outlined"
                         required
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="filled-textarea"
                        label="Discription"
                        placeholder="Product Deatils"
                        name="discription"
                        onBlur={handleOnBlur}
                        multiline
                        variant="filled"
                    required

                    />
                    <br />
                    <Button sx={{ float: 'center', }} type="submit" variant="contained">Submit</Button>
                </form>
                {
                    isLoading && <CircularProgress color="secondary" />
                }
            
        </div>
    );
};

export default AddService;