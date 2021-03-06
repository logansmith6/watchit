import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css'
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button className="submit__btn" onClick={ () => logout()} >
            Logout
        </button>
    )
}

export default LogoutButton;