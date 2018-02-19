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

module.exports = Wallet;

 