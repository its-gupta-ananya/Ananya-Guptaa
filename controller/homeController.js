const MessageMailer = require('../mailers/message');

module.exports.home = function(req,res)
{
    return res.render('index');
}

module.exports.Message = function(req,res)
{
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    MessageMailer.newMessage(name,email,message);
    res.redirect('/');
}