var React = require('react');

var ImageList = React.createClass({
  render: function () {

    var imgList = [];

    this.props.imgUrls.forEach((elem) => {
      imgList.push(
        <div className="column">
          <img className="thumbnail" src={elem.url}/>
          <h5>My Site</h5>
        </div>
      );
    });

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        {imgList}
      </div>
    );

  }
});

module.exports = ImageList;