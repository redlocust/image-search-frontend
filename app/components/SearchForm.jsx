var React = require('react');
var axios = require('axios');
var StatusString = require('StatusString');

var port = process.env.PORT || 3000;

var SearchForm = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  onBeginSearch: function (e) {
    var that = this;

    e.preventDefault();
    var hostAndPort = window.location.origin;

    this.setState(
      {
        isLoading: true
      });

    axios.get(`${hostAndPort}/api/${this.refs.query.value}?offset=2`)
      .then((response) => {

        that.setState(
          {
            isLoading: false
          });


        var urlsArray = response.data;
        that.props.onSearch(urlsArray);
      })
      .catch((error) => {

      });
  },

  onUpdateStatusString: function (status) {

  },

  render: function () {

    var {isLoading} = this.state;

    function renderStatus() {
      if (isLoading) {
        return <StatusString statusString={'Loading...'}/>
      } else {
        return <StatusString statusString={'Enter search query'}/>
      }

    }

    return (
      <div>
        <form action="">
          <input type="text" placeholder="Search query" ref="query"/>
          <button onClick={this.onBeginSearch}>Search</button>
          {renderStatus()}
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;