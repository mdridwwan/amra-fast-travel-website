import React from 'react';

const Hotels = () => {
    return (
        <div class="py-5">
            <h2 class="pt-5 fw-bolder fs-1 shadow pb-4">5 STAR HOTELS</h2>
            <p>They provide the luxury of living in the heart of the city without compromising on the views.</p>
            <div class="container">
              
                <div class="row d-flex shadow ">
                    <div class="col-md-6"><img width="600px" height="300px" src={`https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/de/ea/0f/hotel-facade.jpg`} alt="" srcset="" /></div>
                    <div class="col-md-6 pt-5">
                        <h3 class='text-success'>Pune gets a brand new 5-star hote</h3>
                        
                        <p>The Burj al Arab Hotel or “Tower of the Arabs,” is said to be the world's only 7-star hotel, and is presently the third tallest hotel in the world.</p>
                    </div>
                </div>
              
                <div class="row">
                    <div class="col-6 pt-4 shadow">
                        < img width="600px" height="200px" src={`https://lh3.googleusercontent.com/proxy/W1oJmQCdIoJMrx6a2LDKp2vWotHzqR8frEUmjS9txqMDjoZfvhG7KQXGiBgFwC0vcynyxr0fRakLBvG7e1sMxIc3aRN5DIWGj5G3Na-WJRPno6CBQH19et-dZIBGVmDLWgAQxfzbzjGKvZuBoj0_BfNHxnxX8aG5ci1QqVEZcTqSSzzCs-_9k-Pwub0rWwQ`} alt="" srcset="" />
                        <h5 class='text-success'>Difference Between Five Star Hotel and Seven Star Hotel | Difference Between</h5>
                        <p>From February to May 1922, The Shelbourne played host to its most historic meetings: the drafting of Ireland's first Constitution.</p>
                       <small>$ 230/ per night</small>
                    </div>
                    <div class="col-6 pt-4 shadow">
                        < img width="600px" height="200px" src={`https://photos.travelmyth.com/hotels/main/308x230/48/488832.jpg`} alt="" srcset="" />
                        <h5 class='text-success'>Le Meridien Dhaka </h5>
                        <p>Including a rooftop infinity pool and 6 star restaurants, this 5-star hotel is the perfect destination for those looking for a business or leisure accommodation.</p>
                        <small class='text-primary'>$ 230/ per night</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;