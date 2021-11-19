import { Slide } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FeatureAdventure from '../FeatureAdventure/FeatureAdventure';
import Hotels from '../Hotels/Hotels';
import Services from '../Services/Services/Services'
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Services></Services>
            <Hotels></Hotels>
            <FeatureAdventure></FeatureAdventure>
            <Footer></Footer>
        </div>
    );
};

export default Home;