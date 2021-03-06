/* eslint-disable no-undef */
'use strict'

 const express = require('express');
 const router = express.Router();

 const controller = require('../controllers/customer-controller');
 const authService = require('../services/infra/auth-service');

 router.get('/', controller.get);
 router.get('/name/:name', controller.getByName);
 router.get('/id/:id', controller.getById);
// router.get('/:slug', controller.getBySlug);

 router.post('/', controller.post);
 router.put('/:id', controller.put );
 router.put('/inactivate/:id', controller.inactivate );
 router.put('/activate/:id', controller.activate );
 router.delete('/', controller.delete );
 router.post('/email', controller.sendEmail);

 router.post('/authenticate', controller.authenticate);
 router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;