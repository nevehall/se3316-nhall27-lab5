import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommonService {

	public productAdded_Observable = new Subject();

	constructor(){

	}

	notifyProductAddition(){
		this.productAdded_Observable.next();
	}

}