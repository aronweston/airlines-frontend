import React, { Component } from "react";
import CreateFlight from "../admin/CreateFlight.js";
import FlightTable from "../components/FlightTable.js";
import SearchResults from "../components/SearchResults.js";

export class Flights extends Component {
  render() {
    return (
      <div>
        <h1 className="text-5xl">Flights</h1>
        <CreateFlight />
        <FlightTable />
        <SearchResults />
      </div>
    );
  }
}

export default Flights;
