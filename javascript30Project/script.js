possibleHitSounds = ["https://replit.com/@SchuylerD/Pan-Spam#sound/demo.wav","https://replit.com/@SchuylerD/Pan-Spam#sound/demo1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/engineer.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/engineer1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/heavy.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/heavy1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/medic.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/medic1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/pyro1.wav","https://replit.com/@SchuylerD/Pan-Spam#sound/pyro.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/scout.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/scout1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/sniper.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/sniper1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/soldier.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/soldier1.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/spy.wav", "https://replit.com/@SchuylerD/Pan-Spam#sound/spy1.wav"]

function hitCrumbus() {
	var panHit = Math.floor(Math.random()* this.possibleHitSounds.length);

	var whack = new Audio(this.possibleHitSounds[panHit]);

   	whack.play();
	console.log(panHit);
};


document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        hitCrumbus();
    }
});