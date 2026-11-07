window.AppSynthetic = {
  escape(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); },
  choice(arr) { return arr[Math.floor(Math.random()*arr.length)]; },
  digits(n) { return Array.from({length:n},()=>Math.floor(Math.random()*10)).join(""); },
  alpha(n) { const s="ABCDEFGHJKLMNPQRSTUVWXYZ"; return Array.from({length:n},()=>s[Math.floor(Math.random()*s.length)]).join(""); },
<<<<<<< HEAD
  page(title, desc, config, result, meta="Resultado") {
    return `<section class="generator-page"><div class="generator-top"><div><h1>${title}</h1><p>${desc}</p></div><button class="small-action" data-route="home">← Biblioteca</button></div><div class="generator-layout"><div class="generator-card">${config}</div><div class="result-panel">${result}<div class="result-footer"><span>✓ ${meta}</span><button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button></div></div></div></section>`;
=======
  page(title, eyebrow, desc, config, result, meta="Resultado") {
    return `<section class="generator-page"><div class="generator-top"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${desc}</p></div><button class="small-action" data-route="home">← Biblioteca</button></div><div class="generator-layout"><div class="generator-card">${config}</div><div class="result-panel">${result}<div class="result-footer"><span>✓ ${meta}</span><button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button></div></div></div></section>`;
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
  },
  field(label, id, options) {
    return `<div class="field"><label>${label}</label><select id="${id}">${options.map(o=>`<option value="${this.escape(o.value)}">${this.escape(o.label)}</option>`).join("")}</select></div>`;
  }
};
