import React, { Component } from 'react';
import { FormTitle } from '../formTitle';

class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                <FormTitle className='signin__title' text='Login'/>
            </div>
        )
    }
}

export default Signin;