import React, { Component } from "react";
import FlightSearch from "../components/FlightSearch";
import SearchResults from "../components/SearchResults";
import axios from 'axios'
import _ from 'underscore';

const SERVER_URL = 'http://localhost:3000/flights.json'

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      results: []
    };

    this.getFlights = this.getFlights.bind(this)
  }

  getFlights(depart, arrival) {
    axios.get(SERVER_URL)
      .then(res => {
        const results = _(res.data).where({departure: depart, arrival: arrival})
        this.setState({ results: results })
        console.log(this.state.results);
      })
      .catch(err => console.error(err))
  }
 
  render() {
    return (
      <div>
        <h1 className="text-5xl">Search Flights</h1>
        <FlightSearch onSubmit={this.getFlights} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Search;
