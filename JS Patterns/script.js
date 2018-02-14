/*
1)  Use Decorator. 
You have a red Ball. Need to wrap your Ball by decorators and after in log we should see the 'red ball with lines'. Moreover we should have separate decorators for color and lines.
*/


console.log(new Ball().getDescription ()) // 'ball' 
console.log(new BallDecorator(new Ball()).getDescription ()) // 'red ball' 
console.log(new SomeBallDecorator(new BallDecorator(new Ball())).getDescription ()) // 'red ball with lines'

/*
2) Use observer.
Create two wallets.
Each wallet should send few $ and others should catch this moment and put these $ to them self.
The wallet with ZERO $ will lose.
*/

wallet1.send(); 
wallet2.send();

/*
3) Use Chain.
You have 10 apples. Need to give it for girls and boys, but some children are getting more than 1 apple.
Latest child who will eat the last apple will be glutton.
Need to emulate process of giving apples for children and finding glutton child.
*/


firstChild.eat(10);