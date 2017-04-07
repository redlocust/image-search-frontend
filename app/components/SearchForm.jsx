var React = require('react');
var axios = require('axios');

var port = process.env.PORT || 3000;

var SearchForm = React.createClass({

  onBeginSearch: function (e) {
    e.preventDefault();
    console.log(process.env.PORT);
    axios.get(`//localhost:${port}/api/${this.refs.query.value}?offset=2`)
      .then((response) => {
        var urlsArray = response.data;
        this.props.onSearch(urlsArray);
      })
      .catch((error) => {

      });
  },

  render: function () {
    return (
      <div>
        <form action="">
          <input type="text" placeholder="Search query" ref="query"/>
          <button onClick={this.onBeginSearch}>Search</button>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;