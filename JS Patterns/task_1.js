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