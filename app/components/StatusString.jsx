var React = require('react');


var StatusString = React.createClass({
  render: function () {
    return (
      <div>
        <p className="statusString">{this.props.statusString}</p>
      </div>
    );
  }
});


module.exports = StatusString;