/*
3) Use Chain.
You have 10 apples. Need to give it for girls and boys, but some children are getting more than 1 apple.
Latest child who will eat the last apple will be glutton.
Need to emulate process of giving apples for children and finding glutton child.
*/

function Child(next) { 
	this.next = next; 
} 

Child.prototype.eat = function(apples) { 
	apples = apples-Math.round(Math.random() * 2 + 1); 
	if (apples <= 0) { 
		console.log("Neener-neener! I am glutton! And now are No apples: ", apples); 
	} 
	if(this.next && apples > 0) { 
		this.next.eat(apples); 
	} 
} 

const boy1 = new Child(); 
const girl1 = new Child(boy1); 
const boy2 = new Child(girl1); 
const girl2 = new Child(boy2); 
const boy3 = new Child(girl2); 
const girl3 = new Child(boy3); 
const boy4 = new Child(girl3); 
const girl4 = new Child(boy4); 
const boy5 = new Child(girl4); 
const girl5 = new Child(boy5); 
const boy6 = new Child(girl5); 
const girl6 = new Child(boy6); 

var firstChild = girl6;