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
    }

    render(){
        const { restaurantDetails } = this.props;
        return(
            <div>
                <h1>{restaurantDetails.name}</h1>
                <img src={restaurantDetails.image_url} style={{width: '235px'}}/>
                <p>{restaurantDetails.display_phone}</p>
                <p>{restaurantDetails.rating}</p>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    restaurantDetails: state.fetchDataByIdReducer.restaurantDetails
});

export default connect(mapStateToProps)(IndividualResults);