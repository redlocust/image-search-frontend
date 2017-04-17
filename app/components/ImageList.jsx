var React = require('react');

var ImageList = React.createClass({
  render: function () {
    var {imgUrls} = this.props;
    var imgList = imgUrls.map(elem => (
        <div className="column">
          <img className="thumbnail" src={elem.url}/>
        </div>
      )
    );

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        {imgList}
      </div>
    );

  }
});

module.exports = ImageList;