'use strict'

exports.retSucesso = (res, data) => {
    res.status(200).send(data);
}

exports.retCreated = (res, msg) => {
    res.status(200).send({
        message: msg
    });
}