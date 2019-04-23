import {gradientPalettes} from "../palettes";

export default {
	title: "Postmodern",
	fileName: "postmodern",
	author: "Kentskyo",
	authorLink: "https://codepen.io/kentskyo/",
	artLink: "https://codepen.io/kentskyo/pen/ojLyzg?editors=1010",
	thumbs: ["/thumbs/abstractParticles/1.png"],

	config: [
		{
			key: "count",
			text: "Count of Elements",
			type: "range",
			defaultValue: 20,
			min: 1,
			max: 100,
		},

		{
			key: "palette",
			text: "Palettes",
			type: "palette",
			defaultValue: gradientPalettes[0],
			options: gradientPalettes
		},

		{
			key: "backgroundColor",
			text: "Backgroud",
			type: "single-palette",
			defaultValue: "#ffffff",
			options: gradientPalettes[0][0]
		}
	],
};
