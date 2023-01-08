import React from 'react';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from './components/home/home.component';
import RestauranrDetails from './components/details/restaurantDetails.component';
import FilterRestaurants from './components/filter/filter.component';

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="details" element={<RestauranrDetails />} />
                <Route exact path="nopage" element={<h1>No Page Found</h1>} />
                <Route exact path="filter" element={<FilterRestaurants />} />
            </Routes>
        </Router>
    )
}

export default RouterApp;