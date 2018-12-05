const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://nhall27:webtechlab5@ds237641.mlab.com:37641/se3316_nhall27_lab5';

const User = require('./model/user');
const Product = require('./model/product');
const Cart = require('./model/cart');

//SANITIZATION
function encodeHTML(e){
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
//Validate the user login in the mlab database
//Add the signed up user to the mlab database
app.post('/api/user/login', (req, res) => {
	
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('user product connection established ');
		const user = new User({
			email: req.body.email,
			manager: req.body.manager
		})
		user.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
	
	// mongoose.connect(url, function(err){
	// 	if(err) throw err;
	// 	User.find({
	// 		email : req.body.email, 
	// 		manager : req.body.manager
	// 	}, function(err, user){
	// 		if(err) throw err;
	// 		if(user.length === 1){	
	// 			return res.status(200).json({
	// 				status: 'mlab user works',
	// 				data: user
	// 			})
	// 		} else {
	// 			return res.status(200).json({
	// 				status: 'fail',
	// 				message: 'Login Failed'
	// 			})
	// 		}
			
	// 	})
	// });
}) 


//Get all products from the PRODUCT collection
app.post('/api/post/getAllProduct', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connection established successfully');
        Product.find({},[],{ sort: { _id: 1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
    });
})

//Add a product
app.post('/api/post/createProduct', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create product connection established ');
		const cart = new Cart({
			name: req.body.name,
			quantity: req.body.quantity,
			tax: req.body.tax,
			price: req.body.price
		})
		cart.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

//Get all the products from the CART collection
app.post('/api/post/getAllCart', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connection established successfully');
        Cart.find({},[],{ sort: { _id: 1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
    });
})

//Update the products in the cart
app.post('/api/post/updateProduct', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		Cart.update(
			{_id: req.body.id },
			{	name : req.body.name, 
				quantity: req.body.quantity,
				tax: req.body.tax,
				price: req.body.price
			},
			(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

//*****************MANAGER UPDATES PRODUCTS***********************
//update price
app.put('/api/put/updatePrice/:id', function(req, res) {
	console.log('price update working' + req.body.price);
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
			if(err)
				res.send(err);
			console.log(req.body);	
			//console.log(err);
		});
})

//update tax 
app.put('/api/put/updateTax/:id', function(req, res) {
	console.log('tax update working' + req.body.tax);
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
			if(err)
				res.send(err);
			console.log(req.body);	
		});
})

//update quantity
app.put('/api/put/updateQuantity/:id', function(req, res) {
	console.log('tax update working' + req.body.quantity);
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
			if(err)
				res.send(err);
			console.log(req.body);	
		});
})

//update description
app.put('/api/put/updateDescript/:id', function(req, res) {
	console.log('tax update working' + req.body.descript);
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, product){
			if(err)
				res.send(err);
			console.log(req.body);	
		});
})

//*******************************************************************

//Delete the product in the cart
app.delete('/api/delete/:id/deleteProduct', (req, res) => {
	console.log('delete product is called');
	mongoose.connect(url, function(err){
		if(err) throw err;
		Cart.findByIdAndRemove(req.body.id,
			(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

//Get all user from the USER collection -- for manager
app.post('/api/post/getAllUser', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('manager connection established successfully');
        User.find({},[],{ sort: { _id: 1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
    });
})

//Add a comment
app.post('/api/post/createReview', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create comment connection established ');
		const reviews = new Reviews({
			name: req.body.name,
			comment: req.body.comment,
			rating: req.body.rating
		})
		reviews.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})


 
app.listen(3000, () => console.log('blog server running on port 3000!'))

