import React from 'react';
import '../Styles/header.css';
import '../Styles/footer.css';
import '../Styles/quicksearch.css';
import CORS from 'cors';
import { withRouter } from 'react-router-dom';

class QuickSearch extends React.Component
{
    mealClick = ( mealTypeId ) => {
        const location  = sessionStorage.getItem('locationId')
        if(location)
        {
            this.props.history.push(`/filter?mealTypeId=${mealTypeId}&location=${location}`);
        }
        else
        {
            this.props.history.push(`/filter?mealTypeId=${mealTypeId}`);
        }
        
        
    }
    render()
    {
        const { quicksearch } = this.props;
        return(
            <div>
                    <div class="container">
                        <div class="quicksearch">Quick Searches</div>
                        <div class="subheading">Discover restaurants by type of meal</div>
    
                            <div class="row">

                                {/* Column 1 */}
                                { quicksearch.map((item) =>
                                    {
                                        return <div class="col-sm-12 col-md-6 col-lg-4" onClick={() => this.mealClick(item.meal_type)}>
                                        <div class="one">
                                            <div class="innerboxpic">
                                                <img class="Breakfast" src= {item.image} /></div>
                                            <div class="secondbox">
                                                <div class="breakfastheading">{item.name}</div>
                                                <div class="breakfastdescription">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    })}   
                            </div>
                     </div>      
            </div>
        )
    }
}

export default withRouter(QuickSearch);