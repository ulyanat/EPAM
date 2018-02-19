/*
1)  Use Decorator. 
You have a red Ball. Need to wrap your Ball by decorators and after in log we should see the 'red ball with lines'. Moreover we should have separate decorators for color and lines.
*/
var Ball = require('/task_1/Ball');
var BallDecorator = require('/task_1/BallDecorator');
var SomeBallDecorator = require('/task_1/SomeBallDecorator');

console.log(new Ball().getDescription ()) // 'ball' 
console.log(new BallDecorator(new Ball()).getDescription ()) // 'red ball' 
console.log(new SomeBallDecorator(new BallDecorator(new Ball())).getDescription ()) // 'red ball with lines'

/*
2) Use observer.
Create two wallets.
Each wallet should send few $ and others should catch this moment and put these $ to them self.
The wallet with ZERO $ will lose.
*/
var Wallet = require('task_2');

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
var Child = require('task_3');

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