import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  gsap } from 'gsap';

import { fetchData } from '../actions/actions.js';

class Search extends React.Component {
    constructor(props){
        super(props)

        this.handleApiSearch = this.handleApiSearch.bind(this);
    }

    componentDidMount(){
                     // selector, duration, config
        new gsap.from('.search-header', 2, {opacity: 0, delay: 0});
        new gsap.from('.search-button', 2, {opacity: 0, delay: 1});

        let searchButton = document.querySelector('.search-button');
        searchButton.addEventListener('mouseenter', () => {
            new gsap.to(searchButton, 1, {y: -10})
        });
        searchButton.addEventListener('mouseleave', () => {
            new gsap.to(searchButton, 1, {y: 0})
        });
    }
       
    handleApiSearch(event){
        const { dispatch } = this.props;

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              dispatch(fetchData(lat, lon));
            })
          };
    };

    render(){
        return(
            <div className='search-container'>
                    <h1 className='search-header'>Find Restaurant's near me</h1>
                    <Link to='/results' className='search-button' onClick={this.handleApiSearch}>Search</Link>
            </div>
        )
    }
};

export default connect(null)(Search);
