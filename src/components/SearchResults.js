import React from 'react';
import { Link } from 'react-router-dom'

const SearchResults = (props) => {
    console.log('results', props.results);

    if (props) {
        if (props.results.length === 0) {
            return <div>There are no results. Search again.</div>
        } else {
            return (
                <div className="grid grid-cols-3 gap-4">
                        {props.results && props.results.map((flight) => 
                            <div key={flight.id} className="bg-black text-white p-10 rounded">
                            <Link to={`/flights/${flight.id}`}>
                            <ul>
                                <li>{flight.flight_number}</li>
                                <li>{flight.departure.toUpperCase()} to {flight.arrival.toUpperCase()}</li>
                                <li>{new Date(flight.date).toLocaleDateString()}</li>
                            </ul>      
                        </Link>
                        </div>
                    )}
                </div>
            );
        }
    }
    
   
}

export default SearchResults;
