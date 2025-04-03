import Navbar from "../components/Weblayout/Navbar";
import Auctions from "../components/Auctions/Auctions";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels"
import Footer from "../components/Weblayout/Footer";


const AuctionsPage = () => {
    return (
        <div>
            <Navbar />
            <Auctions />
            <WhyDealsAndWheels />
            <Footer />
        </div>
    )
}

export default AuctionsPage;