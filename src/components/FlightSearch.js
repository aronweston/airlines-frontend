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

    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(e) {
    const target = e.target;
    const value = target.type === "text";
    const name = target.name;

    this.setState({ [name]: value });
  }

  _handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
  }

  render() {
    return (
      <div className="bg-red-500 rounder-md text-white my-10 p-4">
        <h2>Search Flights</h2>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="departure">
            From:
            <select name="departure" id="departure" required>
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
            <select name="arrival" id="arrival" required>
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
