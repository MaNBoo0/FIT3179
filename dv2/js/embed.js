// Embed each chart spec (one human-readable .vl.json file per chart) into its container.
// Spec files live in js/ and point to their data as "../data/...", so each file also works
// on its own (e.g. in VS Code's Vega preview). The loader resolves those paths from js/.
const LOADER = vega.loader({ baseURL: "js/" });

const CHARTS = [
  ["#vis01", "01_species_lifespan_lollipop.vl.json"]
];

for (const [el, spec] of CHARTS) {
  vegaEmbed(el, spec, { actions: false, config: THEME, renderer: "svg", loader: LOADER })
    .catch(err => console.error(`${spec}:`, err));
}
