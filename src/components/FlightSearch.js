import React, { Component } from "react";
import axios from "axios";
import _ from "underscore";

export class FlightSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "please choose an option",
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({ value: e.target.value });
  }

  _handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="bg-red-500 rounder-md text-white my-10 p-4">
        <h2>Search Flights</h2>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="departure">
            From:
            <select
              value={this.state.value}
              onChange={this._handleChange}
              name="departure"
              id="departure"
            >
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>

          <label htmlFor="arrival">
            To:
            <select
              value={this.state.value}
              onChange={this._handleChange}
              name="arrival"
              id="arrival"
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>

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
