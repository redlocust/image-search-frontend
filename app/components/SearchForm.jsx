var React = require('react');
var axios = require('axios');

var SearchForm = React.createClass({

  onBeginSearch: function (e) {
    e.preventDefault();
    axios.get(`http://localhost:3000/api/${this.refs.query.value}?offset=2`)
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