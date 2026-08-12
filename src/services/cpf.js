window.AppServices=window.AppServices||{};
window.AppServices.cpf=function(){
 const mask=document.getElementById('cpf-mask'),result=document.getElementById('cpf-result'),meta=document.getElementById('cpf-meta'),generate=document.getElementById('generate-cpf'),copy=document.getElementById('copy-cpf'),state=document.getElementById('cpf-state');
 const region={RS:'0',DF:'1',GO:'1',MT:'1',MS:'1',TO:'1',PA:'2',AM:'2',AC:'2',AP:'2',RO:'2',RR:'2',CE:'3',MA:'3',PI:'3',PE:'4',RN:'4',PB:'4',AL:'4',BA:'5',SE:'5',MG:'6',RJ:'7',ES:'7',SP:'8',PR:'9',SC:'9'};
 let raw='00000000000';
 function dv(d,w){let s=0;for(let i=0;i<d.length;i++)s+=Number(d[i])*(w-i);const r=s%11;return r<2?0:11-r;}
 function generateCpf(){const uf=state.value||AppRandom.choice(Object.keys(region));let base;do{base=AppRandom.digits(8)+region[uf];}while(/^([0-9])\1+$/.test(base));raw=base+dv(base,10)+dv(base+dv(base,10),11);render(uf);}
 function render(uf=state.value){result.textContent=(mask.checked?AppFormat.cpf(raw):raw)+'';meta.textContent=uf?`Região fiscal selecionada: ${state.options[state.selectedIndex].text}`:'Região fiscal: aleatória';}
 mask.onchange=()=>render(); state.onchange=()=>render(); generate.onclick=generateCpf; copy.onclick=()=>AppCopy.text(result.textContent,copy); result.onclick=()=>AppCopy.text(result.textContent,copy); generateCpf();
};
