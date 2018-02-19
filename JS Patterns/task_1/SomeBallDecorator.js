function SomeBallDecorator(ball){ 
	this.ball = ball; 
} 

SomeBallDecorator.prototype.getDescription = function () { 
	return this.ball.getDescription() + ' with lines'; 
} 

module.exports = SomeBallDecorator;