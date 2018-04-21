const woodflakeInterval = 100;
const windStrength = {
	min: 0.01,
	max: 0.025
};
const woodflakeSize = {
	min: 40,
	max: 70
}

const woodflakeSpeed = {
	min: 100,
	max: 150
}

function minmax(value, {min, max}) {
	return (value * (max - min)) + min;
}

var woodImage = [...document.querySelectorAll("img.wood")][0];
function bindWood(canvas) {
	if (!canvas instanceof HTMLCanvasElement) return;

	//if (canvas.closest('.section')) canvas.style.backgroundColor = 'rgba(0,0,0,0.1)';

	const ctx = canvas.getContext("2d");

	let woodflakes = [];

	let lastTick = performance.now();

	function tick() {
		const tickTime = performance.now() - lastTick;
		const wind = Math.cos(Date.now() / 10000);
		
		lastTick = performance.now();

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let woodflake of woodflakes) {
			woodflake.y = (performance.now() - woodflake.created) / 1000 * minmax(woodflake.size, woodflakeSpeed) - minmax(woodflake.size, woodflakeSize);
			// ctx.beginPath();
			ctx.drawImage(woodImage,woodflake.x * canvas.width,woodflake.y,minmax(woodflake.size, woodflakeSize),minmax(woodflake.size, woodflakeSize));
	
			woodflake.x += wind * minmax(1 - woodflake.size, windStrength) * (tickTime / 1000);
		}

		woodflakes = woodflakes.filter(woodflake => woodflake.y < canvas.height * 1.5)

		window.requestAnimationFrame(tick);
	}

	window.setInterval(() => {
		const canvasMargin = (canvas.height / woodflakeSpeed.max) * windStrength.max;
		woodflakes.push({
			created: performance.now(),
			x: (Math.random() * (1 + (canvasMargin * 2))) - canvasMargin,
			size: Math.random()
		});
	}, woodflakeInterval);

	window.requestAnimationFrame(tick);
}

let woodStarted = false;

function startWood() {
	if (woodStarted) return;
	woodStarted = true;

	const woodCanvas = [...document.querySelectorAll("canvas.wood")];
	woodCanvas.map(bindWood);
}

const now = new Date();

if (now.getMonth() === 11 && now.getDate() > 15) {
	startWood();
}

function bindFull(canvas) {
	if (!canvas instanceof HTMLCanvasElement) return;

	function fullCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	window.addEventListener('resize', fullCanvas, false);
	fullCanvas();
}

const fullCanvas = [...document.querySelectorAll("canvas.full")];
fullCanvas.map(bindFull);

module.exports = startWood;