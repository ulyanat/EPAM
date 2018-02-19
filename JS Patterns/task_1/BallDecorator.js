function BallDecorator(ball){ 
	this.ball = ball; 
} 

BallDecorator.prototype.getDescription = function () { 
 	return 'red ' + this.ball.getDescription(); 
}

module.exports = BallDecorator;