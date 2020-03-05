import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DisplayResults extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { data } = this.props;
        return(
            <div className='flex-container'>
                {data.map((restaurant) => {
                    return (
                    <div className='rest-container'>
                        <ul key={restaurant.id}>
                            <li className='rest-image'><img src={restaurant.image_url} style={{ width: '100%' }} /></li>
                            <li className='rest-name'>{restaurant.name}</li>
                            <li className='rest-rating'>{restaurant.rating}</li>
                            <Link className='rest-link' to={`/IndividualResults/${restaurant.id}`}>More Info</Link>
                        </ul>
                    </div>
                    )
                })}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    data: state.fetchDataReducer.data
});

export default connect(mapStateToProps)(DisplayResults);