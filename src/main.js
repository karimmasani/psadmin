$ = jQuery = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function() {
        var Child;

        switch(this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

function render() {
    console.log(route);
    var route = window.location.hash.substr(1);
    ReactDom.render(<App route={route} />, document.getElementById('app'));
}
$(window).on('hashchange', function (e) {
    render();
}).trigger('hashchange');