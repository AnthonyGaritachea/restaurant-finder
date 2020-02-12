import React from 'react';
import { connect } from 'react-redux';

import { fetchDataById } from '../actions/actions.js';

class IndividualResults extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchDataById(this.props.match.params.id));
    };

    render(){
        const { restaurantDetails } = this.props;

        if(restaurantDetails.hours){
            var status = restaurantDetails.hours[0].is_open_now;
        }

        console.log(restaurantDetails);
        return(
            <div>
                <h1>{restaurantDetails.name}</h1>
                <img src={restaurantDetails.image_url} style={{width: '235px'}}/>
                <p>{restaurantDetails.display_phone}</p>
                <p>{restaurantDetails.rating}</p>
                {restaurantDetails.categories ? restaurantDetails.categories.map(element => {
                    return(
                      <p key={element.title}>{element.title}</p>
                    ) 
                }) : ''}
                {restaurantDetails.location ? <p>{restaurantDetails.location.display_address.toString()}</p> : ''}
                <img src={restaurantDetails.photos ? restaurantDetails.photos[0] : ''}></img>
                <img src={restaurantDetails.photos ? restaurantDetails.photos[1] : ''}></img>
                <img src={restaurantDetails.photos ? restaurantDetails.photos[2] : ''}></img>
                <p>status: {status === true ? 'Open' : 'Closed'}</p>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    restaurantDetails: state.fetchDataByIdReducer.restaurantDetails
});

export default connect(mapStateToProps)(IndividualResults);