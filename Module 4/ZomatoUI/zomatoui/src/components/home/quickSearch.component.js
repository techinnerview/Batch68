import React from 'react';
import '../../Styles/quicksearch.css';
import { Link } from "react-router-dom"

// Class Component
class QuickSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    navigateToFilter = () => {
    }

    render() {
        const { quicksearch } = this.props;
        return (<div>
            <div className="container">
                <div className="quicksearch">Quick Searches</div>
                <div className="subheading">Discover Restaurants by type of meal</div>
                <div className='row'>
                    {quicksearch && quicksearch.map((item) => {
                        return <Link to='/filter'>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="one">
                                    <div className='innerboxpic'><img className='Breakfast' src={item.image} /></div>
                                    <div className='secondbox'>
                                        <div className='breakfastheading'>{item.name}</div>
                                        <div className='breakfastdescription'>{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>);
    }
}

export default QuickSearch;
