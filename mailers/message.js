const nodeMailer = require('../config/nodemailer');
const ejs = require('ejs');
const fs = require('fs');

exports.newMessage = async (name, email, message) =>
{
    console.log( name, email, message);
    let data = await nodeMailer.renderTemplate( 
    {
        name: name,
        email: email,
        message: message,
    }, 'message.ejs' )
    nodeMailer.transporter.sendMail({
        from:"its-gupta-ananya@gmail.com",
        to: "ananyaguptaag2001@gmail.com",
        subject: "New Message",
        html: data,
    },(err,info) =>
    {
        if(err)
    {
        console.log("Error in Sending Mail",err);
        return;
    }
      console.log("Message Sent", info);
      return;
    })
}