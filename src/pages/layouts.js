const headerOnly = {
  items: [
    {
      type: "text",
      isFromLayout: true,
      layoutItemType: "header",
      isDraggable: false,
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
      position: { left: 202.84734133790735, top: 477.01543739279583 },
      text: "Sample header text\ntext sample"
    }
  ]
};

const headerWithBorder = {
  items: [
    {
      type: "text",
      isFromLayout: true,
      layoutItemType: "header",
      isDraggable: false,
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 72,
        verticalPadding: 250,
        horizontalPadding: 50,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
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

const headerWithSubheader = {
  items: [
    {
      type: "text",
      isFromLayout: true,
      layoutItemType: "header",
      isDraggable: false,
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 79,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        marginBottom: 20,
        isBold: true
      },
      id: 1002,
      text: "Sample header text"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
      layoutItemType: "subheader-multiline",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 103,
      position: { left: 202.84734133790735, top: 477.01543739279583 },
      text: "Sample subheader text\ntext sample text sample"
    }
  ]
};

const subheaderHeaderSubheader = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
      layoutItemType: "text-above",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 1000,
      text: "Sample text above"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
      layoutItemType: "header",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 79,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        isBold: true
      },
      id: 1002,
      text: "Sample header text"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
      layoutItemType: "text-below",
      hasCyrillic: false,
      configValues: {
        fontFamily: "Poppins",
        fontSize: 59,
        padding: 10,
        letterSpacing: 0,
        color: "#000",
        backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
        borderWidth: 0,
        isInline: false,
        lineHeight: 12,
        textAlign: "center",
        isBold: false
      },
      id: 1003,
      text: "Sample text below"
    }
  ]
};

const headerWithBackground = {
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
        borderWidth: 0,
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
  headerWithBackgroundAndBorder
];
