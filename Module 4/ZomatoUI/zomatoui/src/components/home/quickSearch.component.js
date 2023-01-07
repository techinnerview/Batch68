import React from 'react';
import '../../Styles/quicksearch.css';

// Class Component
class QuickSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    navigateToFilter = () => {
        this.props.history.push(`/filter`)
    }

    render() {
        const { quicksearch } = this.props;
        return (<div>
            <div className="container">
                <div className="quicksearch">Quick Searches</div>
                <div className="subheading">Discover Restaurants by type of meal</div>
                <div className='row'>
                    {quicksearch && quicksearch.map((item) => {
                        return <div className="col-sm-12 col-md-6 col-lg-4" onClick={this.navigateToFilter}>
                            <div className="one">
                                <div className='innerboxpic'><img className='Breakfast' src={item.image} /></div>
                                <div className='secondbox'>
                                    <div className='breakfastheading'>{item.name}</div>
                                    <div className='breakfastdescription'>{item.content}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>);
    }
}

export default QuickSearch;
