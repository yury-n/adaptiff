	var w = [],x,y;

	function setup(params = {}) {
		const canvas = createCanvas(windowWidth, windowHeight);
		canvas.id('preview');

		x = 1;
		y = params.generationDistance || 1;

		for (var i = 0; i < 80; i++) {
			w[i] = new walker(params.redEye);
		}

		background(params.theme || 1);
	}

	function draw() {
		for (var i = 0; i < 80; i++) {
			w[i].update();
			w[i].display();
		}
	}

	function walker(redEye) {
		this.pos = createVector(width / 2, height / 2);
		this.vel = createVector(0, 0);

		this.update = function() {
			this.acc = createVector(random(-.1, .1), random(-.1, .1));
			this.vel.add(this.acc);
			this.pos.add(this.vel);
		}

		this.display = function() {
			if (y < 0) {
				fill(x, 0, 0, 0);
			} else {
				fill(x, 0, 0, 1);
			}
			stroke(255, 0, 0, 1)
			noFill();
			ellipse(this.pos.x, this.pos.y, y, y);
			x += 1;

			y -= (redEye && 0.04) || 0.007;
		}
	}

