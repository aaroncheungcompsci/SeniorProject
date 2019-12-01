var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')



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
    //create a new customer
	.post(function(req, res){
		//var jsonData = JSON.parse(req.body);
		var newCustomer = new Customer();
		newCustomer.name = req.body.name;
		newCustomer.email = req.body.email;
		newCustomer.car = req.body.car;
		newCustomer.approved = req.body.approved;
		newCustomer.save(function(err, customer){
			if (err){
				return res.send(500, err);
			}
			return res.json(customer);
		});
	})
	
    //get all customers
	.get(function(req, res){
		Customer.find(function(err, customers){
			if(err){
				return res.send(500, err);
			}
			return res.send(customers);
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
module.exports = router;