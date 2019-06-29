'use strict'

var config = require('../../config');
var sendgrid = require('sendgrid')(process.env.SENDGRID_KEY);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'hello@fabiostefani.io',
        subject: subject,
        html: body
    });
}