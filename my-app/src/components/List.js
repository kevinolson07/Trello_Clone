import React from 'react';

import Category from './Category'
import Card from './Card'
import CreateCard from './createCard'
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Paper, Typography, CssBaseline } from '@material-ui/core';


export default function List() {
    return(
        
            <Toast>
                <div className="col-sm">
                    <Category />
                    <Card />
                    <CreateCard />
                </div>
            </Toast>
        
        
        
    )
}