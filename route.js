const express = require('express');
const path = require('path');


const server = express();

server.use(express.static(path.join(__dirname, "public")));
server.use(express.json({extended:true}));

let lead = [];

server.post("/form", (req, res) => {
    
    let name = req.body.name;
    let email = req.body.email;
    let place = req.body.place;
    
    lead.push({name, email, place});

    sendEmail();
    res.send("Lead capted");
});



server.listen(4000, () => {
    console.log("Server running, port: 4000");
});

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth: {
        user:"YOUREMAIL",
        pass: "YOUREMAIL",
    }
});

function sendEmail() {

    let hotlead = lead[0].email;
    
    const sendedEmail = {
        from: "YOUREMAIL",
        to: hotlead,
        subject: 'Subject',
        text: `Text`
    };

    transporter.sendMail(sendedEmail, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("E-mail enviado");
        }
    })
};