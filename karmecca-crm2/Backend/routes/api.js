var mongoose = require('mongoose');
var Customer = mongoose.model('Customers')
var express = require('express');
var router = express.Router();

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}
	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/#login');
};
//Register the authentication middleware
router.use('/customers', isAuthenticated);

router.route('/customers')
    //create a new post
	.post(function(req, res){
		res.send({message:"TODO create a new customer in the database"});
    })
    //get all customers
	.get(function(req, res){
		Post.find(function(err, posts){
			if(err){
				return res.send(500, err);
			}
			return res.send(posts);
		});
	});

//api for a specfic customer
router.route('/customers/:id')
	//create
	.put(function(req,res){
		return res.send({message:'TODO modify an existing customer by using param ' + req.param.id});
	})

	.get(function(req,res){
		return res.send({message:'TODO get an existing customer by using param ' + req.param.id});
	})

	.delete(function(req,res){
		return res.send({message:'TODO delete an existing customer by using param ' + req.param.id})
    });
module.exports = router();
