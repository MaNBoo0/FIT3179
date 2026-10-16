// Shared Vega-Lite configuration: fonts and recessive axes so every chart matches the page.
// Chart type scale: 13px for every label (axes, legends, headers, annotations),
// 15px bold for value labels printed on the marks (set in the specs).
// The family name must be quoted: "Source Sans 3" ends in a digit, and unquoted the browser rejects it
// when Vega measures text, so labels get sized in a 10px fallback font and overlap.
const FONT = "'Source Sans 3', 'Segoe UI', Arial, sans-serif";

const THEME = {
  font: FONT,
  background: null,
  view: { stroke: null },
  axis: {
    labelColor: "#6B6B6B",
    titleColor: "#6B6B6B",
    labelFontSize: 13,
    titleFontSize: 13,
    titleFontWeight: "normal",
    gridColor: "#E6E8F0",
    domainColor: "#BDBDBD",
    tickColor: "#BDBDBD"
  },
  legend: {
    labelColor: "#444444",
    titleColor: "#444444",
    labelFontSize: 13,
    titleFontSize: 13,
    titleFontWeight: 600
  },
  header: { labelFontSize: 13, titleFontSize: 13 },
  text: { font: FONT, fontSize: 13, color: "#1F1F1F" }
};
