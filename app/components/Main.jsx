var axios = require('axios');

var ImageSearchApp = React.createClass({

    getInitialState: function () {
        return {imgUrls: [{url:"https://s5o.ru/storage/simple/ru/edt/68/88/80/66/ruee18dc5adcd.jpg"}]};
    },

    componentDidMount() {
    },

    onBeginSearch: function (e) {
        e.preventDefault();
        axios.get(`http://localhost:3000/api/${this.refs.query.value}?offset=2`)
            .then((response) => {
                var urlsArray = response.data;
                this.setState({imgUrls: urlsArray});
            })
            .catch((error) => {
            });
    },


    render: function () {

        var imgList = [];

        this.state.imgUrls.forEach((elem) => {
            imgList.push(
                <div className="col-xs-3">
                    <img src={elem.url} className="img-responsive"/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <form action="">
                        <input type="text" placeholder="Search query" ref="query"/>
                        <button onClick={this.onBeginSearch}>Search</button>
                    </form>
                </div>

                < div className="row">
                    < p > Hello react </p>
                    <div className="container">
                        <div className="row fix">
                            {imgList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
