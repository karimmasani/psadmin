"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var routes = require('./routes');

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));