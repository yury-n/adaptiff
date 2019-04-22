export default {
	title: "Pulse Of The Universe",
	fileName: "pulse",
	author: "Yugam",
	authorLink: "https://codepen.io/pizza3/",
	artLink: "https://codepen.io/pizza3/pen/VPOGRG",
	thumbs: ["/thumbs/pulse/1.png"],
	refreshIframe: true,

	config: [
		{
			key: "theme",
			text: "Theme",
			type: "select",
			defaultValue: 255,

			options: [
        { key: 0, text: "Light", value: 255 },
        { key: 1, text: "Dark", value: 1 }
      ]
		},

		{
			key: "generationDistance",
			text: "Generation Distance",
			type: "range",
			defaultValue: 1,
			min: 1,
			max: 255,
		},

		{
			key: "redEye",
			text: "Red Eye Effect",
			type: "boolean",
			defaultValue: false,
		},
	],
};
