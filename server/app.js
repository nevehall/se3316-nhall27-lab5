const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://nhall27:webtechlab5@ds237641.mlab.com:37641/se3316_nhall27_lab5';

const User = require('./model/user');
const Product = require('./model/product');
const Cart = require('./model/cart');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		User.find({
			email : req.body.email, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
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


// app.controller('MainCtrl', function($scope){
// 	$scope.products = [
// 		{Product: "add"}
// 		];
// 	$scope.editing = false;
//     $scope.addProduct = function(product) {
//         $scope.products.push(product);
//         $scope.product = {};
//     };
    
//     $scope.myCartItems = [];
    
//     $scope.addToCart = function(product)
//     {
//       $scope.myCartItems.push(product);
//     }
// });

 
app.listen(3000, () => console.log('blog server running on port 3000!'))

