var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var routes = require('./routes');

ReactDom.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));