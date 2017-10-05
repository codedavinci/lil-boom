import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';


import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import { Login, LoginContainer } from './containers/Login';

// import from './components'
const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
         <Layout>
           
        </Layout> 
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
