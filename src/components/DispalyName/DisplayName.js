import React from 'react';
import { useSelector } from 'react-redux';

const DisplayName = () => {
    const guest = useSelector(guest => guest.user_reducer.guest_login);
    const profile = useSelector(profile => profile.auth_reducer.profile);
    return (
        <h3>
            {guest ? "guest" :
            profile.name.substring(0,profile.name.indexOf("@")) ||
            profile.name
            }
        </h3>
    )
};

export default DisplayName;
