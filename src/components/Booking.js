import React from 'react';

const Booking = (props) => {
    

    if (props && props.booking.length > 1) {
        return (
            <div>
                {props.booking.customer_name}
            </div>
        );
    } else {
        return <div>no bookings for this flight</div>
    }
   
}

export default Booking;
