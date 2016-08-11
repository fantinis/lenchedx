var express = require('express');
var bodyParser = require('body-parser')

var sensorRouter = express.Router();

sensorRouter.use(bodyParser.json());

sensorRouter.route('/')
    .all(function(req,res,next) {

        res.writeHead(200, { 'Content-Type': 'text/plain' })

        next();    
    })

    .get(function(req,res,next) {
        
        res.end('Will send all sensors information to you!');        
    })

    .post(function(req,res,next) {
        
        res.end('Will add the sensor: ' + req.body.name + ' with details: '
           + req.body.description);               
    })

    .delete (function(req,res,next) {

        res.end('Deleting all sensor!');        
    });

sensorRouter.route('/:sensorId')
    .all(function(req,res,next) {

        res.writeHead(200, { 'Content-Type': 'text/plain' })

        next();    
    })
    .get(function(req,res,next) {
        
        res.end('Will send detail of the sensor: '+ req.params.sensorId +
                ' to you');           
    })

    .put(function(req,res,next) {
        
        res.write('Updating the sensor: ' + req.params.sensorId + '\n');
        res.end ('Will update the sensor: ' + req.body.name + 
                 ' with details: ' + req.body.description);            
    })

    .delete (function(req,res,next) {

        res.end('Deleting the sensor: '+ req.params.dishId );  
    
    });

module.exports = sensorRouter;
