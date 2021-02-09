import React from 'react';

const FlightTable = (props) => {
    return (
       <table className="table-auto">
        <thead>
            <tr>
                <th>Date</th>
                <th>Flight No.</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Plane</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3/1/13</td>
                <td>23</td>
                <td>Melbourne</td>
                <td>Adelaide</td>
                <td>747</td>
            </tr>
        </tbody>
        </table>
    );
}

export default FlightTable;
