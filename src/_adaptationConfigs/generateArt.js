export default {
	title: "Generate Art",
	fileName: "generate_art",
	author: "Phillip Broadbent ",
	authorLink: "https://codepen.io/phil_broadbent/",
	thumbs: ["/thumbs/generateArt/1.png"],
	refreshIframe: true,

	config: [
		{
			key: "hasColor",
			text: "Has color",
			type: "select",
			defaultValue: false,

			options: [
				{key: 0, text: "Off", value: false},
				{key: 1, text: "On", value: true},
			],
		},

		{
			key: "shape",
			text: "Shape",
			type: "select",
			defaultValue: 'diagonal',

			options: [
				{key: 0, text: "Diagonals", value: 'diagonal'},
				{key: 2, text: "Half Arc", value: 'halfArc'},
				{key: 3, text: "Orthogonals", value: 'orthogonals'},
				{key: 4, text: "Quarter Arc", value: 'quarterArc'},
			],
		},

		{
      key: "iteration",
      text: "Iteration",
      type: "range",
      defaultValue: 15,
      min: 1,
      max: 30,
    },
	],
};
