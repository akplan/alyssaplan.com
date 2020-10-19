import Typography from "typography"

const typography = new Typography({
    baseFontSize: "24px",
    baseLineHeight: 1.45,
    googleFonts: [
        {
            name: "Fira Code",
            styles: ["400", "700"]
        },
        {
            name: "Courier Prime",
            styles: ["400", "400i", "700", "700i"]
        }
    ],
    headerFontFamily: [
        "Fira Code",
        "Consolas",
        "monospace",
      ],
      bodyFontFamily: ["Courier Prime",
      "Courier New",
      "monospace"],
})

export default typography