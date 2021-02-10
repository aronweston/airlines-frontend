import React, { Component } from 'react'
import FlightSearch from '../components/FlightSearch'
import SearchResults from '../components/SearchResults'

export class Search extends Component {
    constructor() {
        super()
        this.state = {
            undefined: undefined
        }
    }
    

    render() {
        return (
            <div>
                <h1 className="text-5xl">Search Flights</h1>
                <FlightSearch />
                <SearchResults />
            </div>
        )
    }
}

export default Search


100
for (let i = 0; i < this.props.max_seats; i++) {
    const seat = this.props.max_seats[i];
    return <Seat props={seat}></Seat>

}