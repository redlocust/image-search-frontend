// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/imagesearch');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//     console.log("We connected");
// });
//
//
// // term: query text, when: when query was
// var querySchema = mongoose.Schema({
//     term: String,
//     when: String
// });
//
// var Query = mongoose.model('Query', querySchema);
//
// module.exports = Query;
