function create() {
	const canvas = document.getElementById("preview");

	canvas.width = parseInt(getComputedStyle(canvas.closest('body')).width);
	canvas.height = parseInt(getComputedStyle(canvas.closest('body')).height);

	const ctx = canvas.getContext("2d");
	const width = canvas.width;
	const height = canvas.height;
	let iteration = window.iteration;
	let numSquares, diffx, diffy, coordGrid;
	let pattern, colourful, oddRowColour, eventRowColour;

	function generateNumbers(applyOffset) {
		numSquares = iteration * iteration;
		diffx = width / iteration;
		diffy = height / iteration;
		coordGrid = getCoords(applyOffset);
	}

	function getCoords(applyOffset) {
		const arr = [];
		const offsetX = applyOffset ? diffx/2 : 0;
		const offsetY =  applyOffset ? diffy/2 : 0;

		for (var x = 0; x < iteration; x++) {
			for (var y = 0; y < iteration; y++) {
				const coord = {
					x: (x * diffx) + offsetX,
					y: (y * diffy) + offsetY
				};

				arr.push(coord);
			}
		}

		return arr;
	}

	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function drawHorizontalLine(coord) {
		const x = coord.x;
		const y = coord.y;

		ctx.beginPath();

		if (Math.random() > 0.5) {
			ctx.moveTo(x, y + diffy / 2);
			ctx.lineTo(x + diffx, y + diffy / 2);
		} else {
			ctx.moveTo(x + diffx / 2, y);
			ctx.lineTo(x + diffx / 2, y + diffy);
		}

		ctx.stroke();
	}

	function drawDiagonalLine(coord) {
		const x = coord.x;
		const y = coord.y;

		ctx.beginPath();

		if (Math.random() > 0.5) {
			ctx.moveTo(x, y);
			ctx.lineTo(x + diffx, y + diffy);
		} else {
			ctx.moveTo(x, y + diffy);
			ctx.lineTo(x + diffx, y);
		}

		ctx.stroke();
	}

	function drawQuarterArc(coord) {
		const x = coord.x;
		const y = coord.y;

		ctx.beginPath();
		const rad = diffx / 2;
		const random = Math.random();
		if (random < 0.25) {
			ctx.arc(x, y, rad, 1.5 * Math.PI, 0); //top right
		} else if (random >= 0.25 && random < 0.5) {
			ctx.arc(x, y, rad, Math.PI, 1.5 * Math.PI); //top left
		} else if (random >= 0.5 && random < 0.75) {
			ctx.arc(x, y, rad, 0.5 * Math.PI, Math.PI); //bottom left
		} else {
			ctx.arc(x, y, rad, 0, 0.5 * Math.PI); //bottom right
		}

		ctx.stroke();
	}

	function drawArc(coord, i) {
		const x = coord.x;
		const y = coord.y;

		if (colourful) {
			if (i % 2 === 0) {
				if (!oddRowColour) {
					oddRowColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
				}
				ctx.strokeStyle = oddRowColour;
			} else {
				if (!evenRowColour) {
					evenRowColour = invertColour(oddRowColour);
				}
				ctx.strokeStyle = evenRowColour;
			}
		}

		ctx.beginPath();
		const rad = diffx / 2;
		const random = Math.random();
		if (random < 0.5) {
			ctx.arc(x, y, rad, Math.PI, 0); //top
		} else if (random >= 0.5) {
			ctx.arc(x, y, rad,  1.5*Math.PI , 0.5*Math.PI); //right
			ctx.arc(x, y, rad,  0.5*Math.PI, 1.5*Math.PI);
			ctx.arc(x, y, rad, 2 * Math.PI, Math.PI); //bottom
		}

		ctx.stroke();
		ctx.closePath();
	}

	canvas.addEventListener("click", function(e) {
		generateRandomArt();
	});

	document.addEventListener("contextmenu", function(event) {
		event.preventDefault();
		iteration = 0;
		clearCanvas();
	});

	function generateRandomArt(doNotIncrease) {
		const dropdownValue = window.shape;

		const isColourful = window.hasColor;
		let func;
		let applyOffset = false;

		// Reset iteration if pattern changed
		if (dropdownValue !== pattern) {
			iteration = window.iteration;
			pattern = dropdownValue;
		}
		colourful = isColourful;

		if (!doNotIncrease) {
			iteration += 2;
		}

		evenRowColour = null;
		oddRowColour = null;
		ctx.strokeStyle = "black";

		switch (dropdownValue) {
			case "diagonals":
				func = drawDiagonalLine;
				break;
			case "orthogonals":
				func = drawHorizontalLine;
				break;
			case "quarterArc":
				applyOffset = true;
				func = drawQuarterArc;
				break;
			case "halfArc":
				applyOffset = true;
				func = drawArc;
				break;
			default:
				func = drawDiagonalLine;
		}

		generateNumbers(applyOffset);

		clearCanvas();

		for (var i = 0; i < coordGrid.length; i++) {
			if (isColourful) {
				ctx.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
			}

			const startCoord = coordGrid[i];
			func(startCoord, i);
		}
	}

	var interval = setInterval(function() {
		//  generateRandomArt();

		if (iteration > 30) {
			clearInterval(interval);
		}
	}, 1000);


	function invertColour(hexStr) {
		const colours = hexStr.split('');

		const invertedColourMap = {
			'0': 'F',
			'1': 'E',
			'2': 'D',
			'3': 'C',
			'4': 'B',
			'5': 'A',
			'6': '9',
			'7': '8',
			'8': '7',
			'9': '6',
			'A': '5',
			'B': '4',
			'C': '3',
			'D': '2',
			'E': '1',
			'F': '0'
		};

		const invertedColours = colours.map(colour => {
				return invertedColourMap[colour.toUpperCase()];
		}).join('');

		return '#' + invertedColours;
	}

	generateRandomArt();
}
