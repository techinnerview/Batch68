import React from 'react';
import axios from 'axios';
import '../../Styles/wallpaper.css';

// Class Component
class Wallpaper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleLocationChange = (event) => {
        const locationName = event.target.value;
        axios(
            {
                method: 'GET',
                url: `http://localhost:3000/restaurant/getRestaurantByName?name=${locationName}`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurants: response.data })).catch()
    }

    handleSearch = (event) => {
        const { restaurants } = this.state;
        const searchText = event.target.value;
        let filteredList;
        if (searchText === "") {
            filteredList = [];
        } else {
            filteredList = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            })
        }
        this.setState({ suggestions: filteredList, searchText: searchText });
    }

    handleRestaurantClick = (resaurantId) => {
        this.props.history.push(`/details?restaurant=${resaurantId._id}`)
    }

    renderSuggestions = () => {
        const { suggestions, searchText } = this.state;
        if (suggestions && suggestions.length === 0 && searchText) {
            return (
                <ul>
                    <li>No Match found</li>
                </ul>
            )
        }
        return (
            <ul className="unorderedList" style={{ color: "white" }}>
                {suggestions && suggestions.map((item, index) => {
                    return <li key={index} onClick={() => this.handleRestaurantClick(item)} ><img src={`${item.image}`} className="resIcon" />{`${item.name}, ${item.city}`}</li>
                })}
            </ul>
        )
    }

    render() {
        const { locationValues } = this.props;
        return (<div className="app" style={{ color: "black", border: "3px" }}>
            <img src="./Images/Home_Pic.png" className="MainPic" alt="" />
            <div>
                <b className="logo">e!</b>
            </div>
            <div className="heading">Find the best restaurant, cafes, and bars</div>
            <div className="locationSelector">
                <select className='locationDropdown' onChange={this.handleLocationChange} >
                    <option value="0">Select</option>
                    {locationValues && locationValues.map((item) => {
                        return <option value={item.name}>{`${item.name}`}</option>
                    })}
                </select>
                <div id="notebooks">
                    <input id="query" type="text" placeholder='Search for Restaurants' onChange={this.handleSearch} />
                    {this.renderSuggestions()}
                </div>
                <span className='glyphicon glyphicon-search search'></span>
            </div>
        </div>);
    }
}


export default Wallpaper;
