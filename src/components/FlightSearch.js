import React, { Component } from "react";
import axios from "axios";
import _ from "underscore";

export class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      departure: "",
      arrival: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  

  _handleChange(e) {
    this.setState({departure: e.target.value});
    // const target = e.target;
    // const value = target.type === "select";
    // const name = target.name;

    // this.setState({ [name]: value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="bg-red-500 rounder-md text-white my-10 p-4">
        <h2>Search Flights</h2>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="departure">
            From:
            <select value={this.state.departure} onChange={this._handleInput} name="departure" type="select" required>
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>

          {/* <label htmlFor="arrival">
            To:
            <select name="arrival" type="select" required>
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label> */}
          <button
            type="submit"
            value="submit"
            className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2"
          >
            Search Flight
          </button>
        </form>
      </div>
    );
  }
}

export default FlightSearch;
