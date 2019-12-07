const headerOnly = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample\ntext sample"
    }
  ]
};

const headerWithBorder = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample\ntext sample"
    }
  ]
};

const headerWithSubheader = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample\ntext sample text sample"
    }
  ]
};

const subheaderHeaderSubheader = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample"
    },
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample"
    }
  ]
};

const headerWithBackground = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample\ntext sample"
    }
  ]
};

const headerWithBackgroundAndBorder = {
  items: [
    {
      type: "text",
      isDraggable: false,
      isFromLayout: true,
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
      text: "Sample text sample\ntext sample"
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
  headerWithBackground,
  // 4
  headerWithBackgroundAndBorder,
  // 5
  headerWithBorder
];
