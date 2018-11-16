let list = module.exports = {};

let List = require('../module/module');

list.get = (req,res) => {
    List.find({ user: user._id }).exec(function(err, lists)
    {
        res.render('lists', {lists: lists})
    })
}