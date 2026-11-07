window.AppServices=window.AppServices||{};
window.AppServices.endereco=async function(){
 const state=document.getElementById('address-state'),city=document.getElementById('address-city'),choice=document.getElementById('address-choice'),load=document.getElementById('address-load'),random=document.getElementById('address-random'),generate=document.getElementById('generate-endereco'),copy=document.getElementById('copy-endereco'),result=document.getElementById('generic-result'),meta=document.getElementById('endereco-meta');
 let items=[];
 function reset(){items=[];choice.innerHTML='<option value="">Carregue os endereços da cidade</option>';result.textContent='—';meta.textContent='Selecione estado e cidade.';}
 async function cities(){reset();city.innerHTML='<option value="">Carregando...</option>';const list=await AppLocation.getCities(state.value);city.innerHTML='<option value="">Selecione a cidade</option>'+list.map(x=>`<option value="${x.replace(/"/g,'&quot;')}">${x}</option>`).join('');}
 state.onchange=cities;city.onchange=reset;await cities();
 async function loadAddresses(){if(!state.value||!city.value){meta.textContent='Selecione estado e cidade.';return;}load.disabled=true;choice.disabled=true;meta.textContent='Consultando endereços...';choice.innerHTML='<option>Carregando...</option>';try{items=await AppAddress.loadAvailable(state.value,city.value,{force:true});if(!items.length){choice.innerHTML='<option value="">Nenhum endereço retornado</option>';meta.textContent='A API não retornou endereços para essa cidade.';return;}choice.innerHTML='<option value="">Selecione um endereço</option>'+items.map((x,i)=>`<option value="${i}">${AppAddress.label(x)}</option>`).join('');meta.textContent=`${items.length} endereço(s) disponíveis na API.`;}finally{load.disabled=false;choice.disabled=false;}}
 load.onclick=loadAddresses;
 choice.onchange=()=>{if(choice.value!=='')random.checked=false;};
 generate.onclick=async()=>{if(!items.length)await loadAddresses();if(!items.length)return;const item=random.checked?items[Math.floor(Math.random()*items.length)]:items[Number(choice.value)];if(!item){meta.textContent='Selecione um endereço ou marque a escolha aleatória.';return;}const number=AppRandom.rand(1,9999);result.textContent=`${item.logradouro||'Logradouro'}, ${number}`;meta.textContent=`${item.bairro||'Bairro não informado'} • ${item.localidade}/${item.uf} • CEP ${item.cep} • nº residencial genérico`;};
 copy.onclick=()=>AppCopy.text(`${result.textContent} • ${meta.textContent}`,copy);
};
