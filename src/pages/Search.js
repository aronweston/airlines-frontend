import React, { Component } from 'react'
import FlightSearch from '../components/FlightSearch'

export class Search extends Component {
    render() {
        return (
            <div>
                <h1 className="text-5xl">Search Flights</h1>
                <FlightSearch/>
            </div>
        )
    }
}

export default Search
