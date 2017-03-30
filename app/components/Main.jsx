var React = require('react');

var SearchForm = require('./SearchForm.jsx');
var ImageList = require('./ImageList.jsx');

var Main = React.createClass({

    getInitialState: function () {
        return {imgUrls: [{url: "https://s5o.ru/storage/simple/ru/edt/68/88/80/66/ruee18dc5adcd.jpg"}]};
    },

    componentDidMount() {
    },

    handleClick: function (urlsArray) {
        this.setState({imgUrls: urlsArray});
    },

    render: function () {

        var imgUrls = this.state.imgUrls;

        return (
            <div className="main-container container">
                <SearchForm onSearch = {this.handleClick}/>
                <ImageList imgUrls = {imgUrls}/>
            </div>
        );
    }
});


module.exports = Main;
