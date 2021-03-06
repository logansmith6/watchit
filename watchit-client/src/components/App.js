import React from 'react';
import '../App.css';

import Router from './Router';
import { useAuth0 } from '@auth0/auth0-react'


import AuthenticationButton from '../components/Registration/AuthenticationButton';
import PostsContainer from './PostsContainer';
import { withAuthenticationRequired } from '@auth0/auth0-react';


const App = () => {
  
    return (

      
      
      <div>
        <PostsContainer />
        <Router />
        <AuthenticationButton />
      
      </div>
    )
}

export default withAuthenticationRequired(App);
