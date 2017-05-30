import React from 'react';
import { IndexRoute, Route } from 'react-router';
import * as Page from 'containers';

/* eslint-disable react/jsx-no-bind */
export default () => {
    return (
        <Route path="/" component={ Page.App }>
            <IndexRoute component={ Page.Home }/>
            <Route path="books/:id" component={ Page.Book }/>
            <Route path="*" component={ Page.NotFound } status={ 404 }/>
        </Route>
    );
};
