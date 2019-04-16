export default {
	title: "Gradient Waves",
	fileName: "gradient_waves",
	author: "Fabio Ottaviani",
  authorLink: "https://codepen.io/supah/",
  thumbs: ["/thumbs/gradientWaves/1.png"],
  refreshIframe: true,

	config: [
    {
      key: "amplituteY",
      text: "Amplitude Y",
      type: "range",
      defaultValue: 30,
      min: 30,
      max: 150,
    },

    {
      key: "amplituteX",
      text: "Amplitude X",
      type: "range",
      defaultValue: 30,
      min: 30,
      max: 150,
    },

		{
			key: "crazyness",
			text: "Crazyness",
			type: "select",
			defaultValue: true,

			options: [
				{key: 0, text: "On", value: true},
				{key: 1, text: "Off", value: false},
			],
    },

    {
      key: "lines",
      text: "Lines",
      type: "range",
      defaultValue: 10,
      min: 1,
      max: 100,
    },

		{
      key: "smoothness",
      text: "Smoothness",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 100,
    },
	],
};
