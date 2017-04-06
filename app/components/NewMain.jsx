var React = require('react');

var SearchForm = require('SearchForm');
var ImageList = require('ImageList');

var NewMain = React.createClass({

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
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

          <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas
               data-position="left">
            <div className="row column">
              <br/>
              <SearchForm onSearch = {this.handleClick}/>
            </div>
          </div>


          <div className="off-canvas-content" data-off-canvas-content>
            <div className="title-bar hide-for-large">
              <div className="title-bar-left">
                <button className="menu-icon" type="button" data-open="my-info"/>
                <span className="title-bar-title">Mike Mikerson</span>
              </div>
            </div>
            <div className="callout primary">
              <div className="row column">
                <h1 className="page-title">Hello! This is the portfolio of a very witty person.</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  luctus
                  urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed
                  nec diam eu diam mattis viverra. Nulla fringilla.</p>
              </div>
            </div>

            <ImageList imgUrls={imgUrls}/>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = NewMain;
