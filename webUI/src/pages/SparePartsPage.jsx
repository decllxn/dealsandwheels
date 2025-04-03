import React from "react";
import Navbar from "../components/Weblayout/Navbar";
import Footer from "../components/Weblayout/Footer";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels";
import SpareParts from "../components/Spares/SpareParts";

const SparePartsPage = () => {
    return (
        <div>
            <Navbar />
            <SpareParts />
            <WhyDealsAndWheels />
            <Footer />
        </div>
    )
}

export default SparePartsPage;