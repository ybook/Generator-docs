window.AppServices=window.AppServices||{};
(function(){
 const names=['Ana','Beatriz','Bruno','Caio','Camila','Daniel','Diego','Eduarda','Fernanda','Gabriel','Helena','Isabela','João','Julia','Larissa','Lucas','Marina','Mateus','Rafael','Sofia','Thiago','Vitória'];
 const surnames=['Silva','Santos','Oliveira','Souza','Pereira','Costa','Almeida','Ferreira','Rodrigues','Gomes','Martins','Araújo','Barbosa','Ribeiro','Carvalho'];
 const sectors={tech:'Tecnologia',retail:'Varejo',services:'Serviços',industry:'Indústria',health:'Saúde',education:'Educação',transport:'Transporte e logística',construction:'Construção',food:'Alimentação',finance:'Serviços financeiros'};
 const bind=(id,fn)=>{const e=document.getElementById(id);if(e)e.onclick=fn;};
 const set=(v)=>{const e=document.getElementById('generic-result');if(e)e.textContent=v;};
 const meta=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
 const stateName=uf=>{const o=AppLocation.fallbackStates.find(x=>x[0]===uf);return o?o[1]:uf;};
 function copy(id){const b=document.getElementById(id),r=document.getElementById('generic-result');if(b&&r)b.onclick=()=>AppCopy.text(r.textContent,b);}
 function fullName(){return `${AppSynthetic.choice(names)} ${AppSynthetic.choice(surnames)} ${AppSynthetic.choice(surnames)}`.replace(/\s+/g,' ');}

 const cpfRegion={RS:'0',DF:'1',GO:'1',MT:'1',MS:'1',TO:'1',PA:'2',AM:'2',AC:'2',AP:'2',RO:'2',RR:'2',CE:'3',MA:'3',PI:'3',PE:'4',RN:'4',PB:'4',AL:'4',BA:'5',SE:'5',MG:'6',RJ:'7',ES:'7',SP:'8',PR:'9',SC:'9'};
 function cpfDV(d,w){let s=0;for(let i=0;i<d.length;i++)s+=Number(d[i])*(w-i);const r=s%11;return r<2?0:11-r;}
 function makeCpf(uf='SP'){let base;do{base=AppRandom.digits(8)+(cpfRegion[uf]??'8');}while(/^([0-9])\1+$/.test(base));const d1=cpfDV(base,10),d2=cpfDV(base+d1,11);return `${base}${d1}${d2}`;}
 function makeRg(){const base=AppSynthetic.digits(8),dv=String((Number(base.slice(0,2))+Number(base.slice(2,4))+Number(base.slice(4,6))+Number(base.slice(6,8)))%10);return base+dv;}
 function makeTitulo(){return AppSynthetic.digits(12);}
 function cnpjDv(base,weights){let sum=0;for(let i=0;i<base.length;i++)sum+=Number(base[i])*weights[i];const r=sum%11;return r<2?0:11-r;}
 function makeCnpj(){let base;do{base=AppSynthetic.digits(8)+'0001';}while(/^([0-9])\1+$/.test(base));const d1=cnpjDv(base,[5,4,3,2,9,8,7,6,5,4,3,2]),d2=cnpjDv(base+d1,[6,5,4,3,2,9,8,7,6,5,4,3,2]);return `${base}${d1}${d2}`;}
 function slug(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'.').replace(/^\.+|\.+$/g,'').slice(0,42);}
 const companyRoots=['Atlas','Núcleo','Orbe','Lumen','Vértice','Horizonte','Prisma','Aurora','Pontal','Integra','Nova','Eixo','Delta','Brava','Essencial'];
 const legalNatures=['Sociedade Empresária Limitada','Empresário Individual','Sociedade Anônima Fechada','Sociedade Simples Limitada'];
 function makeCompanyName(sector){const root=AppSynthetic.choice(companyRoots),sectorName=sectors[sector]||'Serviços';return {trade:`${root} ${sectorName}`,legal:`${root} ${sectorName} Ltda.`};}
 function randomOpeningDate(){const today=new Date();const years=AppRandom.rand(1,24);const d=new Date(today.getFullYear()-years,AppRandom.rand(0,11),AppRandom.rand(1,28));return formatDate(d);}
 function brl(value){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:2}).format(value);}
 const stateDDDs={AC:['68'],AL:['82'],AP:['96'],AM:['92','97'],BA:['71','73','74','75','77'],CE:['85','88'],DF:['61'],ES:['27','28'],GO:['61','62','64'],MA:['98','99'],MT:['65','66'],MS:['67'],MG:['31','32','33','34','35','37','38'],PA:['91','93','94'],PB:['83'],PR:['41','42','43','44','45','46'],PE:['81','87'],PI:['86','89'],RJ:['21','22','24'],RN:['84'],RS:['51','53','54','55'],RO:['69'],RR:['95'],SC:['47','48','49'],SP:['11','12','13','14','15','16','17','18','19'],SE:['79'],TO:['63']};
 function makePhone(uf){const ddd=AppSynthetic.choice(stateDDDs[uf]||['11']);const n='9'+AppSynthetic.digits(8);return `(${ddd}) ${n.slice(0,5)}-${n.slice(5)}`;}
 function randomBirth(){const today=new Date(),age=AppRandom.rand(18,80);let birth=new Date(today.getFullYear()-age,AppRandom.rand(0,11),AppRandom.rand(1,28));let calculated=today.getFullYear()-birth.getFullYear();const before=(today.getMonth()<birth.getMonth())||(today.getMonth()===birth.getMonth()&&today.getDate()<birth.getDate());if(before)calculated--;if(calculated!==age)birth.setFullYear(birth.getFullYear()-1);const finalAge=today.getFullYear()-birth.getFullYear()-(((today.getMonth()<birth.getMonth())||(today.getMonth()===birth.getMonth()&&today.getDate()<birth.getDate()))?1:0);return {date:birth,age:finalAge};}
 function formatDate(d){return new Intl.DateTimeFormat('pt-BR').format(d);}

 AppServices.cnh=()=>{bind('generate-cnh',()=>{const st=document.getElementById('cnh-state').value,cat=document.getElementById('cnh-cat'),catValue=cat.value,catLabel=cat.options[cat.selectedIndex].text;const base=AppSynthetic.digits(9);let sum1=0,sum2=0;for(let i=0;i<9;i++){sum1+=Number(base[i])*(9-i);sum2+=Number(base[i])*(1+i);}let d1=sum1%11;if(d1>=10)d1=0;let d2=sum2%11;if(d2>=10)d2=0;set(`${base}${d1}${d2}`);meta('cnh-meta',`${stateName(st)} • ${catLabel} • numeração genérica marcada`);});copy('copy-cnh');};

 AppServices.chassi=()=>{
   const continent=document.getElementById('vin-continent'),category=document.getElementById('vin-category'),country=document.getElementById('vin-country'),countryField=document.getElementById('vin-country-field'),countryStatus=document.getElementById('vin-country-status'),generate=document.getElementById('generate-chassi'),copyButton=document.getElementById('copy-chassi');
   const chars='ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
   const vinMap={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9};
   const vinWeights=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
   const regionPrefixes={'north-america':'1','central-america':'3',caribbean:'3','south-america':'9',europe:'W',asia:'J',oceania:'6','middle-east':'N'};
   function makeVin(){
     let vin=(regionPrefixes[continent.value]||'Z');
     while(vin.length<17)vin+=chars[Math.floor(Math.random()*chars.length)];
     const arr=vin.slice(0,17).split('');
     let sum=0;
     for(let i=0;i<17;i++)sum+=(vinMap[arr[i]]??0)*vinWeights[i];
     const mod=sum%11;
     arr[8]=mod===10?'X':String(mod);
     return arr.join('');
   }
   async function updateCountries(){
     const ready=continent.value&&category.value;
     countryField.classList.toggle('is-hidden',!ready);
     country.disabled=true;
     generate.disabled=true;
     if(!ready){
       country.innerHTML='<option value="">Selecione região e categoria</option>';
       countryStatus.textContent='Aguardando seleção.';
       return;
     }
     country.innerHTML='<option value="">Carregando países...</option>';
     countryStatus.textContent='Consultando lista de países...';
     const items=await AppCountryData.getCountries(continent.value);
     country.innerHTML='<option value="">Selecione o país</option>'+items.map(x=>`<option value="${AppSynthetic.escape(x.name)}">${AppSynthetic.escape(x.name)}</option>`).join('');
     country.disabled=false;
     countryStatus.textContent=`${items.length} país(es) disponíveis • ${AppCountryData.labels[continent.value]||continent.value}`;
   }
   continent.onchange=updateCountries;
   category.onchange=updateCountries;
   country.onchange=()=>{generate.disabled=!country.value;};
   generate.onclick=()=>{
     if(!continent.value||!category.value||!country.value)return;
     const vin=makeVin();
     set(`${vin} 
      `);
     meta('chassi-meta',`${AppCountryData.labels[continent.value]} • ${category.value} • ${country.value} • VIN com dígito estrutural`);
   };
   if(copyButton){const result=document.getElementById('generic-result');copyButton.onclick=()=>AppCopy.text(result.textContent,copyButton);}
   updateCountries();
 };


 AppServices.celular=()=>{bind('generate-celular',()=>{const d=document.getElementById('phone-ddd').value,c=document.getElementById('phone-carrier').value,n='9'+AppSynthetic.digits(8);set(`(${d}) ${n.slice(0,5)}-${n.slice(5)}`);meta('phone-meta',`DDD ${d} • ${c} selecionada • número não consultado contra linha ativa`);});copy('copy-celular');};

 AppServices.titulo=()=>{bind('generate-titulo',()=>{const st=document.getElementById('titulo-state').value,z=document.getElementById('titulo-zone').value;set(`${makeTitulo()}`);meta('titulo-meta',`${stateName(st)} • zona ${z==='capital'?'capital':z==='interior'?'interior':'aleatória'} • numeração genérica marcada`);});copy('copy-titulo');};

 AppServices.pessoa=async()=>{
   const state=document.getElementById('person-state'),city=document.getElementById('person-city'),generate=document.getElementById('generate-pessoa'),copyTop=document.getElementById('copy-pessoa'),copyBottom=document.getElementById('person-copy-all-bottom'),status=document.getElementById('pessoa-meta');
   const fields={name:'person-name',phone:'person-phone',cpf:'person-cpf',rg:'person-rg',title:'person-title',age:'person-age-result',birth:'person-birth',address:'person-address'};
   async function loadCities(){city.innerHTML='<option value="">Carregando...</option>';const cities=await AppLocation.getCities(state.value);city.innerHTML='<option value="">Selecione a cidade</option>'+cities.map(x=>`<option value="${x.replace(/"/g,'&quot;')}">${x}</option>`).join('');}
   state.onchange=loadCities;await loadCities();
   function field(k,v){const e=document.getElementById(fields[k]);if(e)e.textContent=v;}
   function allText(){return `Nome: ${document.getElementById(fields.name).textContent}\nNúmero: ${document.getElementById(fields.phone).textContent}\nCPF: ${document.getElementById(fields.cpf).textContent}\nRG: ${document.getElementById(fields.rg).textContent}\nTítulo eleitoral: ${document.getElementById(fields.title).textContent}\nIdade: ${document.getElementById(fields.age).textContent}\nNascimento: ${document.getElementById(fields.birth).textContent}\nEndereço + CEP: ${document.getElementById(fields.address).textContent}`;}
   generate.onclick=async()=>{const uf=state.value,c=city.value;if(!uf||!c){status.textContent='Selecione estado e cidade para gerar o endereço.';return;}generate.disabled=true;status.textContent='Montando perfil e consultando endereço...';try{const birth=randomBirth(),addresses=await AppAddress.loadAvailable(uf,c),a=addresses.length?AppSynthetic.choice(addresses):null;field('name',`${fullName()}`);field('phone',makePhone(uf));field('cpf',`${AppFormat.cpf(makeCpf(uf))}`);field('rg',`${AppFormat.rg(makeRg())}`);field('title',`${makeTitulo()}`);field('age',`${birth.age} anos`);field('birth',formatDate(birth.date));if(a){const number=AppRandom.rand(1,9999);field('address',AppAddress.full(a,number));status.textContent=`Perfil coerente • ${c}/${uf} • número residencial gerado`;}else{field('address','Nenhum endereço retornado pela API para esta cidade.');status.textContent='Perfil gerado, mas a API não retornou endereço.';}}finally{generate.disabled=false;}};
   const copyFn=btn=>AppCopy.text(allText(),btn);if(copyTop)copyTop.onclick=()=>copyFn(copyTop);if(copyBottom)copyBottom.onclick=()=>copyFn(copyBottom);
 };

 AppServices.empresa=async()=>{
   const state=document.getElementById('company-state'),city=document.getElementById('company-city'),sector=document.getElementById('company-sector'),generate=document.getElementById('generate-empresa'),copyTop=document.getElementById('copy-empresa'),copyBottom=document.getElementById('company-copy-all-bottom'),status=document.getElementById('empresa-meta');
   const ids={
     legal:'company-legal-name',trade:'company-trade-name',cnpj:'company-cnpj',situation:'company-status',opened:'company-opened',
     nature:'company-legal-nature',activity:'company-activity',capital:'company-capital',registration:'company-state-registration',
     phone:'company-phone',email:'company-email',address:'company-address'
   };
   const setField=(key,value)=>{const el=document.getElementById(ids[key]);if(el)el.textContent=value;};
   async function loadCities(){
     city.innerHTML='<option value="">Carregando...</option>';
     const cities=await AppLocation.getCities(state.value);
     city.innerHTML='<option value="">Selecione a cidade</option>'+cities.map(x=>`<option value="${AppSynthetic.escape(x)}">${AppSynthetic.escape(x)}</option>`).join('');
     status.textContent='Selecione estado e cidade.';
   }
   state.onchange=loadCities;
   await loadCities();

   function allText(){
     return [
       ['Razão social',ids.legal],['Nome fantasia',ids.trade],['CNPJ',ids.cnpj],['Situação',ids.situation],
       ['Abertura',ids.opened],['Natureza jurídica',ids.nature],['Atividade principal',ids.activity],['Capital social',ids.capital],
       ['Inscrição estadual',ids.registration],['Telefone',ids.phone],['E-mail',ids.email],['Endereço + CEP',ids.address]
     ].map(([label,id])=>`${label}: ${document.getElementById(id).textContent}`).join('\n');
   }

   generate.onclick=async()=>{
     const uf=state.value,c=city.value,s=sector.value;
     if(!uf||!c){status.textContent='Selecione estado e cidade para gerar o endereço.';return;}
     generate.disabled=true;
     status.textContent='Montando cadastro e consultando endereço...';
     try{
       const names=makeCompanyName(s),addresses=await AppAddress.loadAvailable(uf,c),a=addresses.length?AppSynthetic.choice(addresses):null;
       const phone=makePhone(uf);
       const registration=`${uf}${AppSynthetic.digits(10)}`;
       const capital=AppRandom.rand(15,950)*1000+AppRandom.rand(0,99)*100;
       setField('legal',`${names.legal} `);
       setField('trade',`${names.trade} `);
       setField('cnpj',`${AppFormat.cnpj(makeCnpj())}`);
       setField('situation','ATIVA • ');
       setField('opened',randomOpeningDate());
       setField('nature',AppSynthetic.choice(legalNatures));
       setField('activity',sectors[s]||'Serviços');
       setField('capital',`${brl(capital)} •`);
       setField('registration',registration);
       setField('phone',phone);
       setField('email',`${slug(names.trade)}@example.invalid`);
       if(a){
         setField('address',AppAddress.full(a,AppRandom.rand(1,9999)));
         status.textContent=`Perfil empresarial • ${c}/${uf} • CEP consultado`;
       }else{
         setField('address',`${c}/${uf} • CEP não retornado pela API`);
         status.textContent='Perfil gerado, mas a API de endereço não retornou logradouro para esta cidade.';
       }
     }finally{generate.disabled=false;}
   };
   const copyFn=btn=>AppCopy.text(allText(),btn);
   if(copyTop)copyTop.onclick=()=>copyFn(copyTop);
   if(copyBottom)copyBottom.onclick=()=>copyFn(copyBottom);
 };

 AppServices.codificadores=()=>{const run=document.getElementById('codec-run'),clear=document.getElementById('codec-clear'),input=document.getElementById('codec-input'),type=document.getElementById('codec-type'),out=document.getElementById('codec-result');if(!run)return;run.onclick=async()=>{try{out.textContent=await encodeValue(input.value||'',type.value);}catch{out.textContent='Não foi possível processar o texto.';}};clear.onclick=()=>{input.value='';out.textContent='—';};};

 AppServices.decodificador=()=>{const run=document.getElementById('decode-run'),clear=document.getElementById('decode-clear'),input=document.getElementById('decode-input'),out=document.getElementById('decode-result'),kind=document.getElementById('decode-kind'),status=document.getElementById('decode-status'),alts=document.getElementById('decode-alternatives');if(!run)return;run.onclick=()=>{const r=detectDecode(input.value||'');kind.textContent=r.kind;out.textContent=r.value;status.textContent=r.confidence;alts.innerHTML='';(r.alternatives||[]).slice(0,4).forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.className='decode-alt';b.innerHTML=`<strong>${i+1}. ${a.kind}</strong><span>${escapeHtml(a.value.slice(0,120))}</span>`;b.onclick=()=>{kind.textContent=a.kind;out.textContent=a.value;status.textContent=a.confidence||'Hipótese alternativa';};alts.appendChild(b);});};clear.onclick=()=>{input.value='';out.textContent='—';kind.textContent='AGUARDANDO';status.textContent='Nenhuma análise';alts.innerHTML='';};};

 const alphabet58='123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
 const b32='ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
 const morseMap={'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'};
 const reverseMorse=Object.fromEntries(Object.entries(morseMap).map(([k,v])=>[v,k]));
 function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function utf8ToBytes(s){return new TextEncoder().encode(s);}function bytesToUtf8(b){return new TextDecoder().decode(b);}function safeUtf8(b){try{return new TextDecoder('utf-8',{fatal:true}).decode(b);}catch{return null;}}
 function base64(s){return btoa(String.fromCharCode(...utf8ToBytes(s)));}
 function base32Encode(s){const bytes=utf8ToBytes(s);let bits=0,val=0,out='';for(const byte of bytes){val=(val<<8)|byte;bits+=8;while(bits>=5){bits-=5;out+=b32[(val>>bits)&31];}}if(bits)out+=b32[(val<<(5-bits))&31];return out;}
 function base58Encode(s){let n=0n;for(const byte of utf8ToBytes(s))n=(n<<8n)+BigInt(byte);let out='';while(n>0n){const r=Number(n%58n);out=alphabet58[r]+out;n/=58n;}for(const byte of utf8ToBytes(s))if(byte===0)out='1'+out;else break;return out||'1';}
 function ascii85(s){const bytes=utf8ToBytes(s),a=Array.from(bytes),pad=(4-a.length%4)%4;while(a.length%4)a.push(0);let out='';for(let i=0;i<a.length;i+=4){let n=((a[i]*256+a[i+1])*256+a[i+2])*256+a[i+3],chunk='';if(n===0)chunk='z';else{const chars=Array(5);for(let j=4;j>=0;j--){chars[j]=String.fromCharCode((n%85)+33);n=Math.floor(n/85);}chunk=chars.join('');}out+=chunk;}if(pad)out=out.slice(0,-pad);return `<~${out}~>`;}
 function rot(s,n,range){return [...s].map(ch=>{const c=ch.charCodeAt(0),len=range[1]-range[0]+1;if(c>=range[0]&&c<=range[1])return String.fromCharCode(range[0]+((c-range[0]+n)%len+len)%len);return ch;}).join('');}
 function rot13(s){return rot(s,13,[65,90]).replace(/[a-z]/g,c=>rot(c,13,[97,122]));}
 function rot47(s){return [...s].map(c=>{const n=c.charCodeAt(0);return n>=33&&n<=126?String.fromCharCode(33+(n-33+47)%94):c;}).join('');}
 function atbash(s){return [...s].map(c=>{let n=c.charCodeAt(0);if(n>=65&&n<=90)return String.fromCharCode(90-(n-65));if(n>=97&&n<=122)return String.fromCharCode(122-(n-97));return c;}).join('');}
 function morse(s){return s.toUpperCase().split('').map(c=>c===' '?' / ':morseMap[c]||c).join(' ');}
 async function digest(text,alg){const h=await crypto.subtle.digest(alg,utf8ToBytes(text));return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,'0')).join('');}
 async function encodeValue(text,type){switch(type){case'base64':return base64(text);case'base32':return base32Encode(text);case'base58':return base58Encode(text);case'ascii85':return ascii85(text);case'url':return encodeURIComponent(text);case'hex':return [...utf8ToBytes(text)].map(b=>b.toString(16).padStart(2,'0')).join('');case'binary':return [...utf8ToBytes(text)].map(b=>b.toString(2).padStart(8,'0')).join(' ');case'rot13':return rot13(text);case'rot47':return rot47(text);case'atbash':return atbash(text);case'morse':return morse(text);case'sha256':return digest(text,'SHA-256');case'sha512':return digest(text,'SHA-512');default:return text;}}

 function decodeB64(s){try{let c=s.replace(/\s+/g,'').replace(/-/g,'+').replace(/_/g,'/');while(c.length%4)c+='=';if(!/^[A-Za-z0-9+/]*={0,2}$/.test(c))return null;const bin=atob(c);return safeUtf8(Uint8Array.from(bin,x=>x.charCodeAt(0)));}catch{return null;}}
 function decodeHex(s){try{let h=s.replace(/0x/gi,'').replace(/[\s,:;_-]+/g,'');if(!/^[0-9a-f]+$/i.test(h)||h.length<2||h.length%2)return null;return safeUtf8(Uint8Array.from(h.match(/../g),x=>parseInt(x,16)));}catch{return null;}}
 function decodeBinary(s){try{const bits=s.replace(/[^01]/g,'');if(bits.length<8||bits.length%8)return null;return safeUtf8(Uint8Array.from(bits.match(/.{8}/g),x=>parseInt(x,2)));}catch{return null;}}
 function decodeUrl(s){try{let d=s.replace(/\+/g,' '),prev='';for(let i=0;i<3&&d!==prev;i++){prev=d;d=decodeURIComponent(d);}return d!==s?d:null;}catch{return null;}}
 function decodeBase32(s){try{const c=s.toUpperCase().replace(/[\s=-]/g,'');if(!c||!/^[A-Z2-7]+$/.test(c))return null;let bits=0,val=0,bytes=[];for(const ch of c){val=(val<<5)|b32.indexOf(ch);bits+=5;if(bits>=8){bits-=8;bytes.push((val>>bits)&255);}}return safeUtf8(Uint8Array.from(bytes));}catch{return null;}}
 function decodeBase58(s){try{const c=s.replace(/\s+/g,'');if(!c||![...c].every(ch=>alphabet58.includes(ch)))return null;let n=0n;for(const ch of c)n=n*58n+BigInt(alphabet58.indexOf(ch));const bytes=[];while(n>0n){bytes.unshift(Number(n&255n));n>>=8n;}for(const ch of c){if(ch==='1')bytes.unshift(0);else break;}return safeUtf8(Uint8Array.from(bytes));}catch{return null;}}
 function decodeAscii85(s){try{let c=s.trim().replace(/^<~/,'').replace(/~>$/,'').replace(/\s+/g,'');if(!c)return null;const bytes=[];let group=[];for(const ch of c){if(ch==='z'&&!group.length){bytes.push(0,0,0,0);continue;}const v=ch.charCodeAt(0)-33;if(v<0||v>84)return null;group.push(v);if(group.length===5){let n=0;for(const x of group)n=n*85+x;bytes.push((n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255);group=[];}}if(group.length){const original=group.length;while(group.length<5)group.push(84);let n=0;for(const x of group)n=n*85+x;const temp=[(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255];bytes.push(...temp.slice(0,original-1));}return safeUtf8(Uint8Array.from(bytes));}catch{return null;}}

 const letterFreq={E:12.5,A:11,O:10,S:8,R:6.5,I:6,N:5,D:5,M:4.8,U:4.5,T:4.3,C:3.8,L:2.8,P:2.5,V:1.7,G:1.3,H:1.2,Q:1.2,B:1,F:1,Z:.5,J:.4,X:.2,K:.1,W:.1,Y:.1};
 const commonPairs=['DE','DO','DA','OS','AS','ES','EM','EN','ER','AR','RA','RE','OU','QU','UE','AO','CO','PR','TE','TO','TA','SE','OR','RO','NT','ND','AD','AL','CA','PE','PO','PA','MA','NA','NO'];
 const commonChunks=['QUE','PARA','COM','NAO','ESTA','UMA','UM','DE','DO','DA','EM','EU','VOCE','TESTE','TEXTO','OLA','MUNDO'];
 const commonWords=new Set(['OLA','MUNDO','TESTE','TEXTO','CASA','DADO','DADOS','NOME','NUMERO','BRASIL','CHAT','CODIGO','MORSE','SIM','NAO','EU','VOCE','ELE','ELA','NOS','VOCES','ELES','ELAS','AMOR','TEMPO','DIA','NOITE','MANHA','TARDE','BOM','BOA','OI','TUDO','BEM','RUA','CIDADE','ESTADO','PESSOA','ENDERECO','TELEFONE','CARTAO','GERADOR','COPIAR','','REAL','VERDADE','SITE','ESCOLA','TRABALHO','COMPUTADOR','AMIGO','AMIGA','QUERO','GERAR','PARA','POR','COM','SEM','QUE','MAS','OU','DE','DO','DA','DOS','DAS','EM','NO','NA','NOS','NAS','UM','UMA','OS','AS','HELLO','WORLD','TEST','TEXT','CODE','DATA','NAME','NUMBER','HOME','HOUSE','GOOD','MORNING','NIGHT','YES','NO','YOU','ME','WE','THEY','THIS','THAT','THE','AND','CHAT']);
 function languageScore(text){if(!text)return-99;const t=text.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');const letters=t.replace(/[^A-Z]/g,'');if(!letters)return-4;let score=0;const printable=[...text].filter(c=>c==='\n'||c==='\t'||(c.charCodeAt(0)>=32&&c.charCodeAt(0)!==127)).length/Math.max(1,text.length);score+=(printable-.75)*6;const vowels=(letters.match(/[AEIOU]/g)||[]).length/letters.length;if(vowels>.25&&vowels<.62)score+=1.4;else score-=1;for(const p of commonPairs)score+=(letters.match(new RegExp(p,'g'))||[]).length*.15;for(const w of commonChunks)score+=(t.match(new RegExp(`\\b${w}\\b`,'g'))||[]).length*.8;if(/[�\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text))score-=6;return score;}
 function morseNormalize(s){return s.trim().replace(/[•·∙]/g,'.').replace(/[–—−_]/g,'-').replace(/\\/g,'/').replace(/\|+/g,' / ').replace(/\s*\/\s*/g,' / ').replace(/\s+/g,' ');}
 function morseCodeForWord(word){return [...word].map(c=>morseMap[c]||'').join('');}
 function morseDictionary(code){const exact=[];for(const word of commonWords){if(word.length>=2&&morseCodeForWord(word)===code)exact.push({text:word,score:20+word.length});}if(exact.length)return exact;const entries=[...commonWords].filter(w=>w.length>=2).map(word=>({word,code:morseCodeForWord(word)})).filter(x=>x.code);const states=Array.from({length:code.length+1},()=>[]);states[0]=[{text:'',score:0}];for(let i=0;i<code.length;i++){if(!states[i].length)continue;for(const st of states[i])for(const e of entries){if(code.startsWith(e.code,i)){const end=i+e.code.length;states[end].push({text:st.text+(st.text?' ':'')+e.word,score:st.score+e.word.length+2});if(states[end].length>60)states[end]=states[end].sort((a,b)=>b.score-a.score).slice(0,60);}}}return states[code.length].sort((a,b)=>b.score-a.score).slice(0,8);}
 function morseBeam(code,limit=6){const clean=code.replace(/\s+/g,'');if(!clean||!/^[.-]+$/.test(clean))return[];const dictionary=morseDictionary(clean);if(dictionary.length)return dictionary.slice(0,limit);const states=Array.from({length:clean.length+1},()=>[]);states[0]=[{text:'',score:0}];for(let i=0;i<clean.length;i++){if(!states[i].length)continue;for(const st of states[i]){for(let len=1;len<=5&&i+len<=clean.length;len++){const token=clean.slice(i,i+len),ch=reverseMorse[token];if(!ch)continue;const prev=st.text.slice(-1),freq=Math.max(.05,letterFreq[ch]||.2);let inc=Math.log(freq/13);if(prev&&commonPairs.includes(prev+ch))inc+=.42;if(/\d/.test(ch))inc-=.3;states[i+len].push({text:st.text+ch,score:st.score+inc});}}for(let pos=i+1;pos<=Math.min(clean.length,i+5);pos++){if(states[pos].length>260)states[pos]=states[pos].sort((a,b)=>b.score-a.score).slice(0,260);}}
 return states[clean.length].map(x=>({...x,score:x.score+languageScore(x.text)*.85+(commonWords.has(x.text)?8:0)})).sort((a,b)=>b.score-a.score).slice(0,limit);}
 function decodeMorseCandidates(s){const n=morseNormalize(s);if(!/^[.\- /]+$/.test(n))return[];const words=n.split(/\s+\/\s+/);let assembled=[{text:'',score:0}];for(const word of words){let options;if(/\s/.test(word)){const tokens=word.trim().split(/\s+/),decoded=tokens.map(x=>reverseMorse[x]||'?').join('');options=[{text:decoded,score:decoded.includes('?')?-4:1+languageScore(decoded)}];}else options=morseBeam(word,24);if(!options.length)return[];const next=[];for(const base of assembled)for(const opt of options.slice(0,12))next.push({text:(base.text?base.text+' ':'')+opt.text,score:base.score+opt.score});assembled=next.sort((a,b)=>b.score-a.score).slice(0,8);}return assembled.map(x=>({value:x.text,score:x.score}));}

 function candidateList(s){const input=s.trim();if(!input)return[];const candidates=[];const add=(kind,value,formatScore)=>{if(!value||value===input||!value.trim())return;const readable=languageScore(value),score=formatScore+Math.max(-.35,Math.min(.35,readable/18));candidates.push({kind,value,score,readable});};
   const compact=input.replace(/\s+/g,'');
   if(/^[A-Za-z0-9+/_=-]+$/.test(compact)&&compact.length>=4)add('Base64',decodeB64(input),.77);
   if(/^[A-Za-z2-7=\s-]+$/i.test(input)&&compact.length>=8)add('Base32',decodeBase32(input),.68);
   if(/^[1-9A-HJ-NP-Za-km-z\s]+$/.test(input)&&compact.length>=5)add('Base58',decodeBase58(input),.58);
   if(/^<~[\s\S]*~>$/.test(input)||(/^[!-u\s]+$/.test(input)&&/[!#$%&()*+;<=>?@^_`{|}~]/.test(input)))add('ASCII85',decodeAscii85(input),.78);
   if(/(?:0x)?[0-9a-f]{2}/i.test(input)){const cleaned=input.replace(/0x/gi,'').replace(/[\s,:;_-]+/g,'');if(cleaned.length>=4&&cleaned.length%2===0)add('Hexadecimal',decodeHex(input),.80);}
   if(/^[01\s,;:_-]+$/.test(input)&&input.replace(/[^01]/g,'').length>=8)add('Binário',decodeBinary(input),.86);
   if(/%[0-9A-Fa-f]{2}/.test(input)||/\+/.test(input))add('URL',decodeUrl(input),.84);
   if(/^[.\-•·∙–—−_\/|\\\s]+$/.test(input)){const mc=decodeMorseCandidates(input);mc.slice(0,6).forEach((x,i)=>add(i?'Morse (alternativa)':'Morse',x.value,.88-i*.025));}
   const originalLang=languageScore(input);
   if(/[A-Za-z]{4}/.test(input)){const r13=rot13(input),ab=atbash(input),r47=rot47(input);if(languageScore(r13)>originalLang+.55)add('ROT13',r13,.48);if(languageScore(ab)>originalLang+.8)add('Atbash',ab,.39);if(languageScore(r47)>originalLang+.9)add('ROT47',r47,.36);}
   return candidates.sort((a,b)=>b.score-a.score);
 }
 function detectDecode(s){const input=s.trim();if(!input)return{kind:'VAZIO',value:'Cole algum conteúdo para analisar.',confidence:'Nenhuma entrada',alternatives:[]};const first=candidateList(input);if(!first.length)return{kind:'DESCONHECIDO',value:'Não foi possível reconhecer um formato reversível com confiança.',confidence:'Nenhuma hipótese confiável',alternatives:[]};let best=first[0],path=[best.kind],value=best.value,total=best.score;for(let depth=0;depth<2;depth++){const next=candidateList(value).filter(x=>!x.kind.startsWith('Morse (alternativa)'));if(!next.length||next[0].score<.62)break;const n=next[0];if(n.value===value)break;path.push(n.kind);value=n.value;total=(total+n.score)/2;best={...n,value};}const alternatives=first.filter(x=>x.value!==value).slice(0,5).map(x=>({kind:x.kind,value:x.value,confidence:`Confiança heurística: ${Math.round(Math.min(.98,x.score)*100)}%`}));return{kind:path.join(' → '),value,confidence:`Confiança heurística: ${Math.round(Math.max(.01,Math.min(.98,total))*100)}%${path.length>1?` • ${path.length} camadas`:''}`,alternatives};}
})();
