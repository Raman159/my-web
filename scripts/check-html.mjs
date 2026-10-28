import { readFileSync } from "node:fs";

const h = readFileSync("out/projects/eventraa/index.html", "utf8");
const i = readFileSync("out/index.html", "utf8");
const p = readFileSync("out/projects/index.html", "utf8");

function grab(html, re) {
  return html.match(re);
}

console.log("eventraa title", grab(h, /<title>[^<]+/)?.[0]);
console.log("eventraa problem", h.includes("The problem"));
console.log("eventraa role", h.includes("My role"));
console.log("eventraa og", grab(h, /property="og:[^"]+" content="[^"]+"/g));
console.log("eventraa canonical", grab(h, /rel="canonical" href="[^"]+"/)?.[0]);
console.log("home title", grab(i, /<title>[^<]+/)?.[0]);
console.log("home og", grab(i, /property="og:[^"]+" content="[^"]+"/g));
console.log("home canonical", grab(i, /rel="canonical" href="[^"]+"/)?.[0]);
console.log("home desc", grab(i, /name="description" content="[^"]+/)?.[0]);
console.log("home h1", grab(i, /<h1[^>]*>[^<]+/)?.[0]);
console.log("home email typo", i.includes("gmail.com.com"));
console.log("projects h1", grab(p, /<h1[^>]*>[^<]+/)?.[0]);
console.log("projects canonical", grab(p, /rel="canonical" href="[^"]+"/)?.[0]);
