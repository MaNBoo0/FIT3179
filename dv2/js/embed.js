// Embed each chart spec (one human-readable .vl.json file per chart) into its container.
// Spec files live in js/ and point to their data as "../data/...", so each file also works
// on its own (e.g. in VS Code's Vega preview). The loader resolves those paths from js/.
const LOADER = vega.loader({ baseURL: "js/" });

const CHARTS = [
  ["#vis01", "01_species_lifespan_lollipop.vl.json"],
  ["#vis01b", "01b_species_mass_lifespan.vl.json"],
  ["#vis02", "02_breed_lifespan_boxplot.vl.json"],
  ["#vis03", "03_size_face_heatmap.vl.json"],
  ["#vis04", "04_pet_survival_waffle.vl.json"]
];

// Wait for the web fonts, otherwise Vega measures labels in the fallback font and they overlap.
document.fonts.ready.then(() => {
  for (const [el, spec] of CHARTS) {
    vegaEmbed(el, spec, { actions: false, config: THEME, renderer: "svg", loader: LOADER })
      .catch(err => console.error(`${spec}:`, err));
  }
});
