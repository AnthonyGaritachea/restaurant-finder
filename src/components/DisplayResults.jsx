import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { gsap } from 'gsap';

import { FaStar } from "react-icons/fa";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class DisplayResults extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        let restContainer = document.querySelectorAll('.rest-container');
        if(restContainer){
            gsap.from(restContainer, 1, {opacity: 0, y: 100, duration: 0.5, stagger: 0.5});
        }
    }

    render(){
        const { data } = this.props;

        return(
            <div>
            { (Object.values(data).length === 0) ?
                <div className='spinner-loader'>
                    <Loader 
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100} 
                    />
                </div>
            : <div className='flex-container'>
                    {data.map((restaurant) => {
                        return (
                        <div className='rest-container' key={restaurant.id}>
                            <ul>
                                <li><img className='rest-image' src={restaurant.image_url}/></li>
                                <li className='rest-name'>{restaurant.name}</li>
                                <li className='rest-rating'>{restaurant.rating} <FaStar/></li>
                                <Link className='rest-link' to={`/IndividualResults/${restaurant.id}`}>More Info</Link>
                            </ul>
                        </div>
                        )
                    })}
               </div>}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    data: state.fetchDataReducer.data
});

export default connect(mapStateToProps)(DisplayResults);