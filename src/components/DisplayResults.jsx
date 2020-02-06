import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DisplayResults extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { data } = this.props;
        console.log('data:',data);
        return(
            <div>
                {data.map((restaurant) => {
                    return (
                        <ul>
                            <li key={restaurant.id}></li>
                            <li><img src={restaurant.image_url} style={{width: '235px'}}/></li>
                            <li>{restaurant.name}</li>
                            <li>{restaurant.rating}</li>
                            <Link to={`/IndividualResults/${restaurant.id}`}>More Info</Link>
                        </ul>
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