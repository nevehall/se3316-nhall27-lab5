const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://nhall27:webtechlab5@ds237641.mlab.com:37641/se3316_nhall27_lab5';

const User = require('./model/user');
const Product = require('./model/product');
const Cart = require('./model/cart');
const DCMA = require('./model/dcma');
const DcmaPolicy = require('./model/dcmaPolicy');
const Reviews = require('./model/reviews');

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

//Update the products quantity in the cart
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

//Delete the product in the cart

// app.delete('/api/delete/:id/deleteProduct', (req, res) => {
// 	console.log('delete product is called');
// 	mongoose.connect(url, function(err){
// 		if(err) throw err;
// 		Cart.findByIdAndRemove(req.body.id,
// 			(err, doc) => {
// 			if(err) throw err;
// 			return res.status(200).json({
// 				status: 'success',
// 				data: doc
// 			})
// 		})
// 	});
// })



//***********MANAGER FUNCTIONALITIES - update and delete products, DCMA***********
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

//remove product
app.delete('/api/delete/removeProduct/:id', function(req, res){
	console.log('id of product to delete' + req.body.id);
	Product.findByIdAndRemove(req.params.id, function(err, next){
		if(err) return next(err);
			//res.send(err);
		res.send('Deleted successfully!');
		console.log(req.body);
		console.log(err);
	});
})

//Add a DCMA
app.post('/api/post/createDCMA', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create DCMA connection established ');
		const dcma = new DCMA({
			manEmail: req.body.manEmail,	
			cusEmail: req.body.cusEmail,
			about: req.body.about,
			comment: req.body.comment
		})
		dcma.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

//Add a new product
app.post('/api/post/createNewProduct', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create NEW product connection established ');
		const product = new Product({
			name: req.body.name,
			price: req.body.price,
			tax: req.body.tax,
			quantity: req.body.quantity,
			descript: req.body.descript
		})
		product.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'new product success',
				data: doc
			})
		})
	});
})



//*******************************************************************


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

//Get all DCMAs
app.post('/api/post/getAllDcma', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('DCMA find established successfully');
        DCMA.find({},[],{ sort: { _id: 1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
    });
})

//create dcma policy to view publicly
app.post('/api/post/createDcmaPolicy', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create dcma policy connection established ');
		const dcmaPolicy = new DcmaPolicy({
			info: req.body.info
		})
		dcmaPolicy.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

//get the dcma policy to display publicly
app.post('/api/post/getDcmaPolicy', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('get dcma policy successful');
        DcmaPolicy.find({},[],(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
    });
})

// app.get('/api/get/getDmcaPolicy'), function(req, res){
// 	console.log('in getDcmaPolicy');
// 	console.log(res);
// 	DcmaPolicy.find(function(err, dcma){
// 		if(err) 
// 			console.log(err);
// 			//res.send(err);
// 		res.send(dcma);
// 	});
// }

//********************MAKE A REVIEW COMPONENT***********************
//Add a review
app.post('/api/post/createReview', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err
		console.log('create review connection established ');
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

//Get all the reviews
app.post('/api/post/getAllReviews', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connection established successfully');
        Reviews.find({},[],{ sort: { _id: 1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'find reviews success',
				data: doc
			})
		})
    });
})

//Get all best sellers 
app.post('/api/post/getBestSellers', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('best sellers connection established successfully');
        Product.find({},[],{ sort: { purchased: -1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'find best sellers success',
				data: doc
			})
		})
    });
})

//*******************************************************************


app.listen(3000, () => console.log('blog server running on port 3000!'))

