import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";


// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const CarDetailPage = lazy(() => import("./pages/CarDetailPage"));
const CommunitiesPage = lazy(() => import("./pages/CommunitiesPage"));
const SellersDashboard = lazy(() => import("./pages/SellersDashBoard"));
const BuyersDashboard = lazy(() => import("./pages/BuyersDashBoard"));
const Blog = lazy(() => import("./pages/BlogHome"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const SellACar = lazy(() => import("./pages/SellACar"));
const Auction = lazy(() => import("./pages/AuctionsPage"));
const CarsForSale = lazy(() => import("./pages/CarsForSalePage"));
const Spares = lazy(() => import("./pages/SparePartsPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const About = lazy(() => import("./pages/AboutPage"));
const Profile = lazy(() => import("./pages/ProfilePage"));
const Settings = lazy(() => import("./pages/SettingsPage.jsx"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-20 text-lg">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-detail/:id" element={<CarDetailPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/sellers-dashboard" element={<SellersDashboard />} />
          <Route path="/buyers-dashboard" element={<BuyersDashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/sell-a-car" element={<SellACar />} />
          <Route path="/auctions" element={<Auction />} />
          <Route path="/cars-for-sale" element={<CarsForSale />} />
          <Route path="/spare-parts" element={<Spares />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;