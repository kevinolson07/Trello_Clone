import React from 'react';
import './List.css';
import Title from './Title'
import Card from './Card'
import InputContainer from './Input/InputContainer'
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Paper, Typography, CssBaseline } from '@material-ui/core';

export default function List() {
    return(
        <Toast>
            <div calss="col-sm">
            <p >
                <Title />
                <Card />
                <InputContainer />
            </p>
        </div>
        </Toast>
        
    )
}