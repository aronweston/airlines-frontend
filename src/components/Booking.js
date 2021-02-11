import React from 'react';

const Booking = (props) => {
    console.log('props from booking', props.booking);
    return (
        <div className="grid grid-cols-3 gap-4">
            {props.booking && props.booking.map((flight) => 
                <div key={flight.id} className="bg-black text-white p-10 rounded">
                <ul>
                    <li>{flight.flight_id}</li>
                    <li>{flight.customer_name.toUpperCase()}</li>
                    <li>{flight.seat}</li>
                </ul>      
            </div>
            )}
        </div>
    );
}

export default Booking;
