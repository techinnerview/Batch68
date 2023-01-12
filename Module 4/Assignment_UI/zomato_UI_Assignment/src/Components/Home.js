import React from 'react';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';
import axios from 'axios';

class Home extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            location:[],
            mealTypes:[]
    }
    }
    
    componentDidMount()
    {
        sessionStorage.clear();
        //location0
        axios(
            {
                method: 'GET',
                url: 'http://localhost:2020/api/citylist',
                headers: {'Content-Type' : 'application/json' }
            }).then(response => this.setState( { location : response.data.citylist } )).catch()

        //QuickSearch mealtype option
        axios(
            {
                method: 'GET',
                url: 'http://localhost:2020/api/mealTypes',
                headers: {'Content-Type' : 'application/json' }
            }).then(response => this.setState( { mealTypes : response.data.mealtypes } )).catch()
    }

    render(){
        const { location, mealTypes } = this.state;
        return(
            <div>
                <Wallpaper locationValues = {location}/>
                <QuickSearch quicksearch = { mealTypes}/>
                {/* <button onClick={this.navigate}>Navigate To Filter</button> */}
            </div>
        )

    }
}

export default Home;