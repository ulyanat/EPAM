class SomeBallDecorator {

 	constructor(ball) {
		this.ball = ball;
	}
	
	getDescription() {
	return this.ball.getDescription() + ' with lines'; 
	}
}

module.exports = SomeBallDecorator;