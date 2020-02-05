import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/actions.js';

class Search extends React.Component {
    constructor(props){
        super(props)

        this.handleApiSearch = this.handleApiSearch.bind(this);
    }
       
    handleApiSearch(event){
        event.preventDefault();
        const { dispatch } = this.props;

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              dispatch(fetchData(lat, lon))
            })
          } 
    };

    render(){
        return(
            <div>
                <form>
                    <label>Find Restaurant's near me</label>
                    <button type='submit' onClick={this.handleApiSearch}>Search</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(Search);
