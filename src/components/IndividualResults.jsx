import React from 'react';
import { connect } from 'react-redux';

import { MdPhone } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

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
                <div className='flex-container2'>
                    <div className='rest-image-container'>
                        <img src={restaurantDetails.image_url} style={{width: '235px'}}/>
                    </div>
                    <div className='rest-details-container'>
                        <h1>{restaurantDetails.name}</h1>
                        <p><MdPhone/> {restaurantDetails.display_phone}</p>
                        <p>{restaurantDetails.rating} <FaStar/></p>
                        <p>Categories :
                        {restaurantDetails.categories ? restaurantDetails.categories.map(element => {
                            return(
                                    <p key={element.title}> - {element.title}</p>
                            ) 
                        }) : ''}
                        </p>
                        {restaurantDetails.location ? <p>{<MdLocationOn/>}{restaurantDetails.location.display_address.toString()}</p> : ''}
                        <p>Currently {status === true ? 'Open' : 'Closed'}</p>
                    </div>
                </div>
                <div className='img-flex-container'>
                    <p>Customer Photos:</p>
                    <div>
                        <img src={restaurantDetails.photos ? restaurantDetails.photos[0] : ''}></img>
                        <img src={restaurantDetails.photos ? restaurantDetails.photos[1] : ''}></img>
                        <img src={restaurantDetails.photos ? restaurantDetails.photos[2] : ''}></img>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    restaurantDetails: state.fetchDataByIdReducer.restaurantDetails
});

export default connect(mapStateToProps)(IndividualResults);