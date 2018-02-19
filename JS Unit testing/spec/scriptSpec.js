describe("Tests", function() { 

	describe("Task_1", function() { 
		var Ball = require('../lib/task_1/Ball'); 
		var BallDecorator = require('../lib/task_1/BallDecorator'); 
		var SomeBallDecorator = require('../lib/task_1/SomeBallDecorator'); 

		it("should return new object", function(){ 
			expect(new Ball()).toBeDefined(); 
		}); 

		it("should return 'Ball description'", function(){ 
			expect((new Ball()).getDescription()).toEqual('ball'); 
		}); 

		it("should be called 'getDescription' from ball ", function(){ 
			var ball = new Ball(); 
			spyOn(ball, 'getDescription'); 
			new SomeBallDecorator(ball).getDescription(); 
			expect(ball.getDescription).toHaveBeenCalledWith(); 
		}); 
	}) 

	describe("Task_2", function() { 
		var Wallet = require('../lib/task_2'); 
		it("should return new object", function(){ 
			expect(new Wallet()).toBeDefined(); 
		}); 

		it("should be called 'addObserver' from wallet ", function(){ 
			var wallet = new Wallet(); 
			spyOn(wallet, 'addObserver'); 
			wallet.addObserver(); 
			expect(wallet.addObserver).toHaveBeenCalled(); 
		}); 

		it("should be called 'send' from wallet ", function(){ 
			var wallet = new Wallet(); 
			spyOn(wallet, 'send'); 
			wallet.send(); 
			expect(wallet.send).toHaveBeenCalled(); 
		}); 
	}) 

	describe("Task_3", function() { 
		var Child = require('../lib/task_3'); 
		it("should return new object", function(){ 
			expect(new Child()).toBeDefined(); 
		}); 

		it("should be called 'eat' from child", function(){ 
			var child = new Child(); 
			spyOn(child, 'eat'); 
			child.eat(10); 
			expect(child.eat).toHaveBeenCalled(); 
		}); 

		it("should be called 'eat' from child2 to child", function(){ 
			var child = new Child(); 
			var child2 = new Child(child); 
			spyOn(child, 'eat'); 
			child2.eat(10); 
			expect(child.eat).toHaveBeenCalled(); 
		}); 
	}) 
})