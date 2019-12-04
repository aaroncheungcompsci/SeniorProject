var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')



//Used for routes that must be authenticated.
/*
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
*/
router.route('/customers')
    //create a new customer
	.post(function(req, res){
		//var jsonData = JSON.parse(req.body);
		var newCustomer = new Customer();
		newCustomer.name = req.body.name;
		newCustomer.email = req.body.email;
		newCustomer.category = req.body.category;
		newCustomer.phone = req.body.phone;
		newCustomer.venmo = req.body.venmo;
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
	//get
	.get(function(req,res){
		Customer.findById(req.params.id, function(err, customer){
			if(err)
				res.send(err);
			res.json(customer);
		});
	})
	//create
	.put(function(req,res){
		Customer.findById(req.params.id, function(err, customer){
			if(err)
				res.send(err);
			customer.name = req.body.name;
			customer.email = req.body.email;
			customer.category = req.body.category;
			customer.phone = req.body.phone;
			customer.venmo = req.body.venmo;
			customer.car = req.body.car;
			customer.approved = req.body.approved;
			customer.save(function(err, customer){
				if(err)
					res.send(err);
				res.json(customer);
			});
		});
	})

	.delete(function(req,res){
		Customer.remove({
			_id: req.params.id
		}, function(err){
			if (err)
				res.send(err);
			res.json("deleted :(");
		});
    });
module.exports = router;