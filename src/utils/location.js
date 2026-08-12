window.AppLocation={
 API:'https://servicodados.ibge.gov.br/api/v1/localidades',
 fallbackStates:[['AC','Acre'],['AL','Alagoas'],['AP','Amapá'],['AM','Amazonas'],['BA','Bahia'],['CE','Ceará'],['DF','Distrito Federal'],['ES','Espírito Santo'],['GO','Goiás'],['MA','Maranhão'],['MT','Mato Grosso'],['MS','Mato Grosso do Sul'],['MG','Minas Gerais'],['PA','Pará'],['PB','Paraíba'],['PR','Paraná'],['PE','Pernambuco'],['PI','Piauí'],['RJ','Rio de Janeiro'],['RN','Rio Grande do Norte'],['RS','Rio Grande do Sul'],['RO','Rondônia'],['RR','Roraima'],['SC','Santa Catarina'],['SP','São Paulo'],['SE','Sergipe'],['TO','Tocantins']],
 normalize(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();},
 async getStates(){try{const r=await fetch(`${this.API}/estados?orderBy=nome`);if(!r.ok)throw 0;return (await r.json()).map(x=>({uf:x.sigla,name:x.nome}));}catch{return this.fallbackStates.map(([uf,name])=>({uf,name}));}},
 async getCities(uf){if(!uf)return[];try{const r=await fetch(`${this.API}/estados/${uf}/municipios?orderBy=nome`);if(!r.ok)throw 0;return (await r.json()).map(x=>x.nome);}catch{return[];}},
 stateOptions(selected=''){return this.fallbackStates.map(([uf,name])=>`<option value="${uf}" ${selected===uf?'selected':''}>${name} (${uf})</option>`).join('');},
 async fillStateSelect(id,selected=''){const el=document.getElementById(id);if(!el)return;const states=await this.getStates();el.innerHTML=states.map(s=>`<option value="${s.uf}" ${selected===s.uf?'selected':''}>${s.name} (${s.uf})</option>`).join('');}
};
