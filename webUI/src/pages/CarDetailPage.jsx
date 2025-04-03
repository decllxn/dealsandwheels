import React from "react";
import Navbar from "../components/Weblayout/Navbar";
import CarDetails from "../components/VehicleDetails/CarDetails";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels";
import Footer from "../components/Weblayout/Footer";


const CarDetailPage = () => {
    return (
        <div>
            <Navbar />
            <CarDetails />
            <WhyDealsAndWheels />
            <Footer />
        </div>   
    )
}

export default CarDetailPage;