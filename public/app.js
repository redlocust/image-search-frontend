var ImageSearchApp = React.createClass({

    getInitialState: function () {
        return {imgUrls: ["https://s5o.ru/storage/simple/ru/edt/68/88/80/66/ruee18dc5adcd.jpg"]};
    },

    componentDidMount() {
        console.log('Mount');

    },

    chooseRandomImg: function () {
        var randomNumber = Math.floor(Math.random() * this.state.data.length);
        var selectedImg = this.state.data[randomNumber];
        this.setState({selectedImg: selectedImg.content.rendered});
    },

    onBeginSearch: function (e) {
        e.preventDefault();
        console.log('Query');
        axios.get(`https://image-search-microservice-redlocust.c9users.io/imagesearch/${this.refs.query.value}?offset=2`)
            .then((response) => {
                //console.dir(response.data[0].url);
                var urlsArray = response.data;
                this.setState({imgUrls: urlsArray});
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            });
    },


    render: function () {
        console.log('Hello');

        var imgList = [];

        this.state.imgUrls.forEach((elem) => {
            imgList.push(
                <div className="col-xs-3">
                    <img src={elem.url} className="img-responsive"/>
                </div>
            );
        });

        return (
            <div>
                <div>
                    <form action="">
                        <input type="text" placeholder="Search query" ref="query"/>
                        <button onClick={this.onBeginSearch}>Search</button>
                    </form>
                </div>

                < div >
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

ReactDOM.render(
    <ImageSearchApp search='funny cat'/>
    ,
    document.getElementById('content')
);