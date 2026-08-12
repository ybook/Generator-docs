window.AppCountryData = {
  cache: new Map(),
  apiV5: 'https://restcountries.com/v5',
  apiV3: 'https://restcountries.com/v3.1',

  labels: {
    'north-america': 'América do Norte',
    'central-america': 'América Central',
    caribbean: 'Caribe',
    'south-america': 'América do Sul',
    europe: 'Europa',
    asia: 'Ásia',
    oceania: 'Oceania',
    'middle-east': 'Oriente Médio'
  },

  fallback: {
    'north-america': ['Canadá','Estados Unidos','México'],
    'central-america': ['Belize','Costa Rica','El Salvador','Guatemala','Honduras','Nicarágua','Panamá'],
    caribbean: ['Antígua e Barbuda','Bahamas','Barbados','Cuba','Dominica','Granada','Haiti','Jamaica','República Dominicana','Santa Lúcia','São Cristóvão e Névis','São Vicente e Granadinas','Trinidad e Tobago'],
    'south-america': ['Argentina','Bolívia','Brasil','Chile','Colômbia','Equador','Guiana','Paraguai','Peru','Suriname','Uruguai','Venezuela'],
    europe: ['Albânia','Alemanha','Andorra','Áustria','Bélgica','Bielorrússia','Bósnia e Herzegovina','Bulgária','Chipre','Croácia','Dinamarca','Eslováquia','Eslovênia','Espanha','Estônia','Finlândia','França','Grécia','Hungria','Irlanda','Islândia','Itália','Letônia','Liechtenstein','Lituânia','Luxemburgo','Macedônia do Norte','Malta','Moldávia','Mônaco','Montenegro','Noruega','Países Baixos','Polônia','Portugal','Reino Unido','República Tcheca','Romênia','Rússia','San Marino','Sérvia','Suécia','Suíça','Ucrânia','Vaticano'],
    asia: ['Afeganistão','Arábia Saudita','Armênia','Azerbaijão','Bahrein','Bangladesh','Brunei','Butão','Camboja','Catar','Cazaquistão','China','Coreia do Norte','Coreia do Sul','Emirados Árabes Unidos','Filipinas','Geórgia','Iêmen','Índia','Indonésia','Irã','Iraque','Israel','Japão','Jordânia','Kuwait','Laos','Líbano','Malásia','Maldivas','Mianmar','Mongólia','Nepal','Omã','Paquistão','Palestina','Quirguistão','Singapura','Síria','Sri Lanka','Tajiquistão','Tailândia','Timor-Leste','Turcomenistão','Turquia','Uzbequistão','Vietnã'],
    oceania: ['Austrália','Fiji','Ilhas Marshall','Ilhas Salomão','Kiribati','Micronésia','Nauru','Nova Zelândia','Palau','Papua-Nova Guiné','Samoa','Tonga','Tuvalu','Vanuatu'],
    'middle-east': ['Arábia Saudita','Bahrein','Catar','Egito','Emirados Árabes Unidos','Iêmen','Iraque','Israel','Jordânia','Kuwait','Líbano','Omã','Palestina','Síria','Turquia']
  },

  displayNames: (() => {
    try { return new Intl.DisplayNames(['pt-BR'], {type:'region'}); }
    catch { return null; }
  })(),

  normalizeCountry(country) {
    const code = country?.codes?.alpha_2 || country?.cca2 || '';
    const apiName = country?.names?.common || country?.translations?.por?.common || country?.name?.common || '';
    let name = apiName;
    if (code && this.displayNames) {
      try { name = this.displayNames.of(code) || apiName; } catch {}
    }
    return { code: code || name.slice(0,2).toUpperCase(), name };
  },

  async request(url) {
    const response = await fetch(url, {headers:{Accept:'application/json'}});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (Array.isArray(data)) return data;
    if (data?.data && Array.isArray(data.data)) return data.data;
    if (data && typeof data === 'object') return [data];
    throw new Error('Resposta inesperada');
  },

  endpoint(group, version='v5') {
    const base = version === 'v5' ? this.apiV5 : this.apiV3;
    const subregions = {
      'north-america':'North America',
      'central-america':'Central America',
      caribbean:'Caribbean',
      'south-america':'South America'
    };
    if (subregions[group]) {
      const q = encodeURIComponent(subregions[group]);
      return version === 'v5'
        ? `${base}/subregion/${q}?limit=100&response_fields=names.common,codes.alpha_2,region,subregion`
        : `${base}/subregion/${q}?fields=name,translations,cca2,region,subregion,independent`;
    }
    if (['europe','asia','oceania'].includes(group)) {
      const q = encodeURIComponent(group[0].toUpperCase()+group.slice(1));
      return version === 'v5'
        ? `${base}/region/${q}?limit=100&response_fields=names.common,codes.alpha_2,region,subregion`
        : `${base}/region/${q}?fields=name,translations,cca2,region,subregion,independent`;
    }
    return null;
  },

  async loadMiddleEast(version='v5') {
    const base = version === 'v5' ? this.apiV5 : this.apiV3;
    const westAsiaUrl = version === 'v5'
      ? `${base}/subregion/Western%20Asia?limit=100&response_fields=names.common,codes.alpha_2,region,subregion`
      : `${base}/subregion/Western%20Asia?fields=name,translations,cca2,region,subregion,independent`;
    const westAsia = await this.request(westAsiaUrl);
    let egypt=[];
    try {
      egypt = version === 'v5'
        ? await this.request(`${base}/codes.alpha_2/EG?response_fields=names.common,codes.alpha_2,region,subregion`)
        : await this.request(`${base}/alpha/EG?fields=name,translations,cca2,region,subregion,independent`);
    } catch {}
    return [...westAsia, ...egypt];
  },

  async getCountries(group) {
    if (!group) return [];
    if (this.cache.has(group)) return this.cache.get(group);

    let raw=[];
    for (const version of ['v5','v3']) {
      try {
        raw = group === 'middle-east'
          ? await this.loadMiddleEast(version)
          : await this.request(this.endpoint(group, version));
        if (raw.length) break;
      } catch { raw=[]; }
    }

    if (raw.length) {
      const unique=new Map();
      raw.forEach(country => {
        if (country?.independent === false) return;
        const item=this.normalizeCountry(country);
        if (!item.name) return;
        unique.set(item.code || item.name, item);
      });
      const countries=[...unique.values()].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
      if (countries.length) {
        this.cache.set(group,countries);
        return countries;
      }
    }

    const countries=(this.fallback[group]||[]).map((name,index)=>({code:`F${String(index).padStart(2,'0')}`,name}));
    this.cache.set(group,countries);
    return countries;
  }
};
