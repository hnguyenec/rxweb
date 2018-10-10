import {  odd,prop, } from "@rxweb/reactive-form-validators"

export class User {

	@prop()
	type: string;

	//If you want to apply conditional expression of type 'string'
	@odd({conditionalExpression:x => x.type == "Odd" }) 
	oddNumber: number;

	//If you want to apply conditional expression of type 'function'
	@odd({conditionalExpression:(x,y) =>{ return  x.type == "Odd" } }) 
	number: number;

}