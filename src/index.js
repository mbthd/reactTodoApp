
//import reactToolbox files.
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme.js'
import '../assets/react-toolbox/theme.css'

//import react lib.
import React from 'react';
import ReactDOM from 'react-dom';

//import other files.
import {App} from './App';
import './index.css';

//render our app
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
