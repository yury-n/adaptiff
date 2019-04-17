export default {
	title: "Abstract Noise particles",
	fileName: "abstract_particles",
	author: "Goran Vrban",
  authorLink: "https://codepen.io/gvrban/",
  artLink: "https://codepen.io/gvrban/pen/WRjqRd",
	thumbs: ["/thumbs/abstractParticles/1.png"],
	refreshIframe: true,

	config: [
    {
      key: "quantity",
      text: "Quantity",
      type: "range",
      defaultValue: 10,
      min: 10,
      max: 100,
    },

    {
      key: "step",
      text: "Step",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 20,
    },

		{
      key: "size",
      text: "Particles Size",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 3000,
    },

    {
      key: "theme",
      text: "Theme",
      type: "select",
      defaultValue: '#000000',

      options: [
				{key: 0, text: "Dark", value: '#000000'},
				{key: 1, text: "Light", value: '#ffffff'},
			],
    }
	],
};
