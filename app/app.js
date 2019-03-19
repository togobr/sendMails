const nodemailer = require("nodemailer");
var CONFIG = require("/config/config");

function _sendMail(from, to, subject, text, html) {

    var auth = {
      host: CONFIG.NODE_MAILER.SERVICE,
      port: CONFIG.NODE_MAILER.PORT,
      auth: {
        user: CONFIG.NODE_MAILER.AUTH.USER,
        pass: CONFIG.NODE_MAILER.AUTH.PASS
      }
    };

    var mailOptions = {
      from: from, 
      to: to,
      subject: subject, 
      text: text, 
      html: html
    };

    var transporter = Nodemailer.createTransport(auth);
  
    transporter.sendMail(mailOptions, function(error, response) {
      if (error) {
        log.error(error);
      }
      // if you don't want to use this transport object anymore, uncomment following line
      transporter.close(); // shut down the connection pool, no more messages
    });
  }

  var newUser = function(name, login, password, clientId) {

    var from = CONFIG.INFO.EMAIL_NO_REPLY;
    var to = login;
    var subject = CONFIG.INFO.NAME + " - Confirmação de Cadastro";
    var text = "Olá, <b>" + name + "</b>, Sua senha é: " + password + " =)";
  
    var html = Cache.get("app/views/mails/welcome.html");
  
    var url = "http://" + clientId + "." + CONFIG.INFO.HOST;
  
    var htmlPopulated = Mustache.to_html(html, {
      "info": {
        name: CONFIG.INFO.NAME
      },
      "name": name,
      "login": login,
      "password": password,
      "url": url
    });
  
    _sendMail(from, to, subject, text, htmlPopulated);
  
  };

  module.exports.newUser = newUser;
