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
        dispatch(fetchData()) 
    }

    render(){
        return(
            <div>
                <form>
                    <label>Enter Restaurant</label>
                    <input type='text' />
                    <button type='submit' onClick={this.handleApiSearch}>Search</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps)(Search);
