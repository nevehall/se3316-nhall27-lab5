import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import { DCMA } from '../models/dcma.model';
import { Reviews } from '../models/reviews.model';


@Injectable()
export class CommonService {

	//define an observable that keeps track of when the add button is clicked
	public productAdded_Observable = new Subject();
	
	//defining another variable to keep track of the product that needs to be added to cart
	public product_to_be_added;
	
	//dcma stuff
	public dcmaAdded_Observable = new Subject();
	public dcma_to_be_added;
	
	
	//reviews stuff
	public reviewsAdded_Observable = new Subject();
	public reviews_to_be_added;
	
	//manager adding products
	public newProductAdded_Observable = new Subject();
	public newProduct_to_be_added;
	
	//define an observable that keeps track of when the edit button is clicked
	public productEdit_Observable = new Subject();
	
	//define an observable that keeps track of when the edit button is clicked
	public productUpdate_Observable = new Subject();
	
	//defining another variable to keep track of the product that needs to be edited
	public product_to_be_edited;
	public product_to_be_edited2;

	constructor(){
		this.product_to_be_edited = new Cart();
		this.product_to_be_edited2 = new Product();
		this.product_to_be_added = new Cart(); 
		this.dcma_to_be_added = new DCMA();
		this.reviews_to_be_added = new Reviews();
		this.newProduct_to_be_added = new Product();
		
	}

	//trigger the observable to notify the product edit
	notifyProductEdit(){
		this.productEdit_Observable.next();
	}
	
	//setting the product that needs to be edit
	setProductToEdit(cart: Cart){
    this.product_to_be_edited = cart;
    this.notifyProductEdit();
	}
	
	//trigger the observable to notify the product edit
	notifyProductEdit2(){
		this.productUpdate_Observable.next();
	}
	
	//setting the product that needs to be edit in MANAGER
	setProductToEdit2(product: Product){
    this.product_to_be_edited2 = product;
    this.notifyProductEdit2();
	}
	
	//trigger the observable to notify the product to add
	notifyProductAddition(){
		this.productAdded_Observable.next();
	}
	
	//setting the product that needs to be added to the cart
	setProductToAdd(product: Product){
    this.product_to_be_added = product;
    this.notifyProductAddition();
	}
	
	//dcma trigger
	notifyDCMAAddition(){
		this.dcmaAdded_Observable.next();
	}
	
	//set dcma
	setDCMAToAdd(dcma: DCMA){
		this.dcma_to_be_added= dcma;
		this.notifyDCMAAddition;
	}
	
	//reviews trigger
	notifyReviewAddition(){
		this.reviewsAdded_Observable.next();
	}
	
	//set reviews
	setReviewToAdd(reviews: Reviews){
		this.reviews_to_be_added= reviews;
		this.notifyReviewAddition;
	}
	
	//new product trigger
	notifyNewProductAddition(){
		this.newProductAdded_Observable.next();
	}
	
	//set new product
	setNewProductToAdd(product: Product){
		this.newProduct_to_be_added= product;
		this.notifyNewProductAddition;
	}
	
}