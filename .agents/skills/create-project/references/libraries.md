# Browser libraries

Use this table only when a library makes the project meaningfully simpler. Replace
`<version>` with the current stable exact version. All listed libraries are free and
open source with no commercial-use fee. p5.js is LGPL-2.1; the others use permissive
licenses.

| Use case | Library | npm/import name | CDN loading pattern |
| --- | --- | --- | --- |
| 3D scenes | Three.js | `three` | `import * as THREE from "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js";` |
| 2D games | Phaser | `phaser` | `<script src="https://cdn.jsdelivr.net/npm/phaser@<version>/dist/phaser.min.js"></script>` |
| Creative coding | p5.js | `p5` | `<script src="https://cdn.jsdelivr.net/npm/p5@<version>/lib/p5.min.js"></script>` |
| Charts | Chart.js | `chart.js` | `<script src="https://cdn.jsdelivr.net/npm/chart.js@<version>/dist/chart.umd.js"></script>` |
| Presentations | reveal.js | `reveal.js` | CSS: `https://cdn.jsdelivr.net/npm/reveal.js@<version>/dist/reveal.css`; JS: `https://cdn.jsdelivr.net/npm/reveal.js@<version>/dist/reveal.js` |
| Audio playback | Howler.js | `howler` | `<script src="https://cdn.jsdelivr.net/npm/howler@<version>/dist/howler.min.js"></script>` |
| Music and synthesis | Tone.js | `tone` | `<script src="https://cdn.jsdelivr.net/npm/tone@<version>/build/Tone.js"></script>` |
| 2D physics | Matter.js | `matter-js` | `<script src="https://cdn.jsdelivr.net/npm/matter-js@<version>/build/matter.min.js"></script>` |
| Canvas editors | Fabric.js | `fabric` | `import * as fabric from "https://cdn.jsdelivr.net/npm/fabric@<version>/+esm";` |
| Network graphs | Cytoscape.js | `cytoscape` | `<script src="https://cdn.jsdelivr.net/npm/cytoscape@<version>/dist/cytoscape.min.js"></script>` |
| Math notation | KaTeX | `katex` | CSS: `https://cdn.jsdelivr.net/npm/katex@<version>/dist/katex.min.css`; JS: `https://cdn.jsdelivr.net/npm/katex@<version>/dist/katex.min.js` |
| Text diagrams | Mermaid | `mermaid` | `import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@<version>/dist/mermaid.esm.min.mjs";` |
| DOM/SVG animation | anime.js | `animejs` | `import { animate } from "https://cdn.jsdelivr.net/npm/animejs@<version>/dist/bundles/anime.esm.min.js";` |
| Drag and gestures | interact.js | `interactjs` | `<script src="https://cdn.jsdelivr.net/npm/interactjs@<version>/dist/interact.min.js"></script>` |
