
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/homepage';
import ProductInfo from './components/ProductInfo';
import SellerPage from './components/SellerPage';
import Navbar from './components/Navbar';






const RootesProject = () => {
    return (
        <div className=''>

            <Router>
                <Navbar />
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductInfo />} />
                    <Route path="/seller" element={<SellerPage />} />


                </Routes>
            </Router>

        </div>
    )
}

export default RootesProject
