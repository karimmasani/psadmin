"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notfoundpage');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="authors" component={AuthorPage} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

module.exports = routes;