window.AppAddress={
  terms:['Rua','Avenida','Travessa','Praça','Alameda','Rodovia'],
  cache:new Map(),
  key(uf,city){return `${uf}|${AppLocation.normalize(city)}`;},
  async loadAvailable(uf,city,{force=false}={}){
    if(!uf||!city)return[];
    const key=this.key(uf,city);
    if(!force&&this.cache.has(key))return this.cache.get(key);
    const jobs=this.terms.map(async term=>{
      try{
        const url=`https://viacep.com.br/ws/${encodeURIComponent(uf)}/${encodeURIComponent(city)}/${encodeURIComponent(term)}/json/`;
        const r=await fetch(url);
        if(!r.ok)return[];
        const data=await r.json();
        return Array.isArray(data)?data.filter(x=>x&&!x.erro&&x.cep):[];
      }catch{return[];}
    });
    const groups=await Promise.all(jobs);
    const unique=new Map();
    groups.flat().forEach(item=>{
      const k=`${item.cep}|${AppLocation.normalize(item.logradouro)}`;
      if(!unique.has(k))unique.set(k,item);
    });
    const items=[...unique.values()].sort((a,b)=>String(a.logradouro||'').localeCompare(String(b.logradouro||''),'pt-BR'));
    this.cache.set(key,items);
    return items;
  },
  label(item){return `${item.logradouro||'Logradouro não informado'}${item.bairro?` — ${item.bairro}`:''} — ${item.cep}`;},
  full(item,number=''){return `${item.logradouro||'Logradouro não informado'}${number?`, ${number}`:''}${item.bairro?` — ${item.bairro}`:''} — ${item.localidade||''}/${item.uf||''} — CEP ${item.cep||'—'}`;}
};
