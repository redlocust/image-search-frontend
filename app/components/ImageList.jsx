var React = require('react');

var ImageList = React.createClass({
    render: function () {

        var imgList = [];

        this.props.imgUrls.forEach((elem) => {
            imgList.push(
                <div className="col-xs-3">
                    <img src={elem.url} className="img-responsive"/>
                </div>
            );
        });


        console.log(imgList);

        return (
            <div className="container">
                <div className="row">
                {imgList}
                </div>
            </div>
        );

    }
});

module.exports = ImageList;