import React from 'react';
import '../Styles/header.css';
import '../Styles/footer.css';
import '../Styles/quicksearch.css';
import '../Styles/Filter.css';
import CORS from 'cors';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class Filter extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            resturants : [],
            location:undefined,
            mealTypeId:undefined,
            cuisine:[],
            hcost:undefined,
            lcost:undefined,
            sort:undefined,
            pagination:undefined,
            locations:[]
        }
    }
    componentDidMount()
    {
        // Capturing values from Query String
        const qs = queryString.parse(this.props.location.search);
        const location = qs.location;
        const mealTypeId=qs.mealTypeId;

        
        //API call for Filter
        const obj = {
            locationId:location, 
            mealTypeId:mealTypeId 
        };
        
        axios({
            method : 'POST',
            url : 'http://localhost:2020/api/filter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant, location,mealTypeId})).catch()

        axios({
                method: 'GET',
                url: 'http://localhost:2020/api/citylist',
                headers: {'Content-Type' : 'application/json' }
            }).then(response => this.setState( { locations : response.data.citylist } )).catch()
    }

    handleSortChange = (sort) =>
    {
        const { location,mealTypeId,lcost,hcost} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
            
        };
        axios({
            method : 'POST',
            url : 'http://localhost:2020/api/filter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,sort})).catch()

    }

    handleCostChange = (lcost,hcost) =>
    {
        const { location,mealTypeId,sort} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
        };
        axios({
            method : 'POST',
            url : 'http://localhost:2020/api/filter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,lcost,hcost})).catch()
    }

    handleLocationChange = (event) =>
    {
        const location= event.target.value;
        const {mealTypeId,sort,lcost,hcost} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId
        };
        axios({
            method : 'POST',
            url : 'http://localhost:2020/api/filter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,location})).catch()

    }
   
    handlePage = ( pagination) =>
    {
        const { location,mealTypeId,lcost,hcost,sort} = this.state;
        const obj = {
            lCost:lcost,
            hCost:hcost,
            sort:sort,
            locationId:location,
            mealTypeId:mealTypeId,
            pagination:pagination
            
        };
        axios({
            method : 'POST',
            url : 'http://localhost:2020/api/filter',
            headers : { 'Content-Type' : 'application/json' },
            data : obj
        }).then(response => this.setState({resturants : response.data.resturant,pagination})).catch()

    }

    handleNextPage= (resID) => 
    {
        this.props.history.push(`/details?resturant=${resID}`);
    }
   

    render ()
    {
        const { resturants ,locations} = this.state;
        return (
            <div>
                    {/* Container First  */}
                   
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12"></div>
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="Filterbreakfast">Places in Mumbai</h1>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12"></div>
                        </div>
                    </div>
                    

                    {/* Container - 2 */}

                    <div class="container">
                         <div class="row" >
                                <div class="col-sm-4 col-md-4 col-lg-4">         
                                        <div class="Filterrectangle">
                                            <div class="FilterFilt">Filters</div>
                                            <div  class="Filter-Select-Location" >Select Location</div>
                                            <div>
                                                <select class="Filterdropdown" onChange={this.handleLocationChange}>
                                                        <option style={{color: '#8c96ab'}} value="0">Select</option>
                                                            { locations.map((item) => {
                                                                return <option value={item.location_id} >{ `${item.name}, ${item.city}`  }</option>
                                                             }) } 
                                                </select>
                                            </div>
                                            <div class="CuisineFilter">Cuisine</div>
                                            <div>
                                                <input type="checkbox" class="check"  />
                                                <span class="head" >North-Indian</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" class="check" />
                                                <span class="head">South-Indian</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" class="check" />
                                                <span class="head">Chinese</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" class="check" />
                                                <span class="head">Fast Food</span>
                                            </div>
                                            <div>
                                                <input type="checkbox" class="check" />
                                                <span class="head">Street Food</span>
                                            </div>
                                            <div class="CostFilter">Cost For Two</div>
                                                <div>
                                                    <input type="radio" class="radiobutton" name="costSort" onChange={() => {this.handleCostChange(1,500)}}/>
                                                    <span class="head">Less than ₹ 500</span>
                                                </div>
                                                <div>
                                                    <input type="radio" class="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(500,1000)}}/>
                                                    <span class="head">₹ 500 to ₹ 1000 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" class="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(1000,1500)}}/>
                                                    <span class="head">₹ 1000 to ₹ 1500 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" class="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(1500,2000)}}/>
                                                    <span class="head">₹ 1500 to ₹ 2000 </span>
                                                </div>
                                                <div>
                                                    <input type="radio" class="radiobutton"  name="costSort" onChange={() => {this.handleCostChange(2000,10000)}}/>
                                                    <span class="head">₹ 2000+ </span>
                                                </div>
                                                <div class="FilterSort">Sort</div>
                                                <div>
                                                    <input type="radio" class="radiobutton" name="sort" onChange={() => {this.handleSortChange(1)}}></input>
                                                    <span class="head">Price low to high</span>
                                                </div>
                                                <div>
                                                    <input type="radio" class="radiobutton" name="sort" onChange={() => {this.handleSortChange(-1)}}></input>
                                                    <span class="head">Price high to low</span>
                                                </div>
                                            </div>
                                        </div>
                                <div class="col-sm-8 col-md-8 col-lg-8">
                                    {resturants && resturants.length > 0 ? resturants.map(item => {
                                        return <div class="FilterItems" onClick={() => this.handleNextPage(item._id)}>
                                        <img src={item.image} class="FilterPic1"/>
                                        <div class="FilterTheBigChill">{item.name}</div>
                                        <div class="FilterFort">{item.locality}</div>  
                                        <div class="FilterAddress">{item.locality}, {item.city}</div>
                                        <div><hr/></div>
                                        <div class="FilterCUISINES">CUISINES: </div>
                                        <div class="FilterCOSTFORTWO">COST FOR TWO: </div>
                                        <div class="FilterBakery">{item.cuisine.map((food) => `${food.name}, `)}</div>
                                        <div class="FilterSevenHundred"> Rs {item.min_price}/- only</div>
                                    </div>
                                    }) : null}  
                                </div>  
                                <div class = "col-sm-8 col-md-8 col lg-8">
                                {resturants && resturants.length > 0 ?
                                <div class="Filterpagination" style={{'text-align': 'center'}}>
                                <a href="#" >&laquo;</a>
                                <a class="active" href="#" onClick={() => {this.handlePage(1)}} >1</a>
                                <a  href="#" onClick={() => {this.handlePage(2)}}>2</a>
                                <a href="#" onClick={() => {this.handlePage(3)}}>3</a>
                                <a href="#" onClick={() => {this.handlePage(4)}}>4</a>
                                <a href="#" onClick={() => {this.handlePage(5)}}>5</a>
                                <a href="#" onClick={() => {this.handlePage(6)}}>6</a>
                                <a href="#" >&raquo;</a>
                            </div> :
                            <div class="NotFound">Records Not Found...</div>}
                                </div>
            </div>
    </div>
            </div>
            
        )
    }
}

export default  withRouter(Filter);
