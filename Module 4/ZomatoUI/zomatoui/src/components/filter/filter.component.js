import React from 'react';
import axios from 'axios';
import '../../Styles/Filter.css';

// Class Component
class FilterRestaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: [],
            locationValues: []
        }
    }

    componentDidMount() {
        axios(
            {
                method: 'GET',
                url: 'http://localhost:3000/citylist/getcitylist',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ locationValues: response.data })).catch()
        axios(
            {
                method: 'GET',
                url: 'http://localhost:3000/restaurant/getRestaurants',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()
    }

    handleLocationChange = () => {

    }


    render() {
        const { restaurantData, locationValues } = this.state;
        return (<div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                    </div>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                        <h1 className='Filterbreakfast'>Places in Mumbai</h1>
                    </div>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <div className='Filterrectangle'>
                            <div className='FilterFilt'>Filters</div>
                            <div className='Filter-Select-Location'>Select Location</div>
                            <div>
                                <select className='locationDropdown' onChange={this.handleLocationChange} >
                                    <option value="0">Select</option>
                                    {locationValues && locationValues.map((item) => {
                                        return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                                    })}
                                </select>
                            </div>
                            <div className=''>Cuisine</div>
                            <div>
                                <input type="checkbox" className='check' />
                                <span className='head'>North Indian</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' />
                                <span className='head'>South Indian</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' />
                                <span className='head'>Chinese</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' />
                                <span className='head'>Fast Food</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' />
                                <span className='head'>Street Food</span>
                            </div>
                            <div className='CostFilter'>Cost for Two</div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" />
                                <span className='head'>Less than Rs. 500</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" />
                                <span className='head'>Rs. 500 to Rs. 1000</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" />
                                <span className='head'>Rs. 1000 to Rs. 1500</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" />
                                <span className='head'>Rs. 1500 to Rs. 2000</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" />
                                <span className='head'>Rs. 2000+</span>
                            </div>
                            <div className='FilterSort'>Sort</div>
                            <div>
                                <input type="radio" className='radiobutton' name="sort" />
                                <span className='head'>Price low to high</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="sort" />
                                <span className='head'>Price high to low</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-8 col-md-8 col-lg-8'>
                        {restaurantData && restaurantData.map((item) => {
                            return <div className='FilterItems'>
                                <img src={item.image} className="FilterPic1" />
                                <div className='FilterTheBigChill'>{item.name}</div>
                                <div className='FilterFort'>{item.address}</div>
                                <div className='FilterAddress'>{item.locality}, {item.city}</div>
                                <div><hr /></div>
                                <div className='FilterCUISINES'>CUISINES:</div>
                                <div className='FilterCOSTFORTWO'>COST FOR TWO:</div>
                                <div className='FilterBakery'>{item.cuisine}</div>
                                <div className='FilterSevenHundred'>{item.min_price}</div>
                            </div>
                        })}
                    </div>
                    <div className='col-sm-8 col-md-8 col-lg-8'>
                        {restaurantData && restaurantData.length > 0 ?
                        <div className='Filterpagination' >
                            <a href="#" >1</a>
                            <a href="#" >2</a>
                            <a href="#" >3</a>
                            <a href="#" >4</a>
                        </div> : `No Records Found`  
                    }
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default FilterRestaurants;
