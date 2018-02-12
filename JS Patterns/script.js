/*
1)  Use Decorator. 
You have a red Ball. Need to wrap your Ball by decorators and after in log we should see the 'red ball with lines'. Moreover we should have separate decorators for color and lines.
*/

function Ball(){}; 

Ball.prototype.getDescription = function () { 
	return 'ball'; 
} 

function BallDecorator(ball){ 
	this.ball = ball; 
} 

function SomeBallDecorator(ball){ 
	this.ball = ball; 
} 

BallDecorator.prototype.getDescription = function () { 
	return 'red ' + this.ball.getDescription(); 
} 

SomeBallDecorator.prototype.getDescription = function () { 
	return this.ball.getDescription() + ' with lines'; 
} 

console.log(new Ball().getDescription ()) // 'ball' 
console.log(new BallDecorator(new Ball()).getDescription ()) // 'red ball' 
console.log(new SomeBallDecorator(new BallDecorator(new Ball())).getDescription ()) // 'red ball with lines'

/*
2) Use observer.
Create two wallets.
Each wallet should send few $ and others should catch this moment and put these $ to them self.
The wallet with ZERO $ will lose.
*/

function Wallet(name) { 
	this.amount = Math.random() * 1000; 
	this.name = name; 
} 

Wallet.prototype.send = function () { 
	const minus = Math.random() * 100; 
	this.amount = this.amount - minus; 

	if(this.amount > 0) { 
		if (this.wallet.amount <= 0){ 
			console.log(this.name + ' is win'); 
			return; 
		} 
		console.log(this.amount); 
		this.wallet.eventFromWallet(minus); 
		setTimeout(this.send.bind(this), Math.random() * 500); 
	} else { 
		console.log(this.name + ' is empty'); 
	} 
} 

Wallet.prototype.eventFromWallet = function(plus) { 
	this.amount = this.amount + plus; 
} 

Wallet.prototype.addObserver = function(wallet) { 
	this.wallet = wallet; 
} 

let wallet1 = new Wallet('wallet_1'); 
let wallet2 = new Wallet('wallet_2'); 

wallet1.addObserver(wallet2); 
wallet2.addObserver(wallet1); 

wallet1.send(); 
wallet2.send();

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

firstChild.eat(10);