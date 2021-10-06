import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                
                    <Switch>
                        <Route path='/' exact component={Home}/>
                    </Switch>
                
            </Layout>
        </BrowserRouter>
    );
};

export default Routes;