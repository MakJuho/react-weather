import React, {Component} from 'react';

class Cities extends Component{
    // state 변화할 수 있는 값.
    state = {
        cities:[]
    }

    ComponentDidMount(){
        const API = 'localhost:3000';

        fetch(API)
            .then(data => data.json())
            .then(result => 
                this.setState({
                    cities: result
                })
            )
    }

    render(){
        const {cities} = this.state;

        console.log('=======render');
        console.log(cities);
        
        console.log(this.state.cities);
        console.log(this.state.cities)
        return{<div>List;</div>;}
    }
}

export default Cities;