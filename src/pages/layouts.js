const headerOnly = {
  items: [
    {
      type: "text",
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 72,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1002,
      width: 679.5733276157804,
      height: 190.4009433962264,
      position: { left: 131.15605221518987, top: 404.56882911392404 },
      text: "Sample header text\ntext sample"
    }
  ]
};

const headerWithBorder = {
  items: [
    {
      type: "text",
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 72,
        verticalPadding: 250,
        horizontalPadding: 50,
        letterSpacing: 0,
        color: "#fff",
        borderWidth: 1,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1102,
      width: 819.6097770154373,
      height: 587.1805317324184,
      position: { left: 130.19511149228128, top: 246.40973413379072 },
      text: "Sample header text"
    }
  ]
};

const headerWithSubheader = {
  items: [
    {
      type: "text",
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 79,
        padding: 10,
        letterSpacing: 0,
        color: "#fff",
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1102,
      text: "Sample header text",
      width: 807.4346054888508,
      height: 114.33319039451116,
      position: { left: 96.26929674099486, top: 345.3580617495712 }
    },
    {
      type: "text",
      layoutItemType: "subheader-multiline",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        color: "#fff",
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 203,
      position: { left: 136.04202401372214, top: 493.99656946826764 },
      text: "Sample subheader text\ntext sample text sample",
      width: 727.9159519725558,
      height: 160.64536878216126
    }
  ]
};

const subheaderHeaderSubheader = {
  items: [
    {
      type: "text",
      layoutItemType: "text-above",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 1100,
      text: "Sample text above",
      width: 572.1215694682676,
      height: 90.31946826758148,
      position: { left: 213.92581475128645, top: 318.2086192109777 }
    },
    {
      type: "text",
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 79,
        padding: 10,
        letterSpacing: 0,
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1102,
      text: "Sample header text",
      width: 807.4346054888508,
      height: 114.33319039451116,
      position: { left: 96.26929674099486, top: 442.83340480274444 }
    },
    {
      type: "text",
      layoutItemType: "text-below",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 1103,
      text: "Sample text below",
      width: 562.2319897084049,
      height: 90.31946826758148,
      position: { left: 218.8840051457976, top: 591.4719125214409 }
    }
  ]
};

const headerWithBackground = {
  items: [
    {
      type: "text",
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 72,
        verticalPadding: 250,
        horizontalPadding: 50,
        letterSpacing: 0,
        color: "#000",
        withBackground: true,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1102,
      width: 817.6457975986278,
      height: 585.7632933104632,
      position: { left: 91.17710120068611, top: 207.11835334476845 },
      text: "Sample header text"
    }
  ]
};

const headerWithBackgroundAndBorder = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 72,
        verticalPadding: 250,
        horizontalPadding: 50,
        letterSpacing: 0,
        color: "#000",
        withBackground: true,
        backgroundColor: { r: 0, g: 0, b: 0, a: 0.05 },
        borderWidth: 1,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: true
      },
      id: 1002,
      width: 679.5733276157804,
      height: 190.4009433962264,
      position: { left: 202.84734133790735, top: 477.01543739279583 },
      text: "Sample header text"
    }
  ]
};

const weShouldAllBeDesigners = {
  items: [
    {
      id: 100,
      type: "text",
      isFromLayout: true,
      configValues: {
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 1,
        color: "#ffffff",
        fontFamily: "El Messiri",
        fontSize: 120,
        letterSpacing: 0,
        padding: 100
      },
      position: { left: 142.93096054888505, top: 184.43825042881645 },
      text: `Sample
text sample
also
goes here`,
      width: 525.2768987341773,
      height: 482.98061708860763
    }
  ]
};

export default [
  // 0
  headerOnly,
  // 1
  headerWithSubheader,
  // 2
  subheaderHeaderSubheader,
  // 3
  headerWithBorder,
  // 4
  headerWithBackground,
  // 5
  headerWithBackgroundAndBorder,
  // 6
  weShouldAllBeDesigners
];
