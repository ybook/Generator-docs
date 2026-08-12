# Generator

Biblioteca web de geradores e utilitários para desenvolvimento.

## Atualizações
- CPF: UF opcional; sem seletor de cidade.
- CNPJ: sem localização desnecessária.
- RG/CNH/Título/Pessoa/Empresa: todas as 27 UFs.
- CEP: consulta pública por UF, cidade e logradouro, filtro de bairro e escolha aleatória entre resultados encontrados.
- Endereço: consulta CEP/logradouro e gera número residencial gerado.
- Sidebar com categorias recolhíveis e botão +/−.
- Tema claro/escuro somente por ícone.
- Transição entre geradores sem escurecimento/fade.
- Codificadores: Base64, Base32, Base58, ASCII85, URL, Hex, Binário, ROT13, ROT47, Atbash, Morse, SHA-256 e SHA-512.
- Decodificador automático heurístico para Base64, Hex, Binário, URL, Morse, ROT13 e Atbash.

## Limites importantes
- CNH, título eleitoral, RG e outros documentos são identificadores gerados para protótipos.
- O gerador de cartão usa números de sandbox conhecidos; não gera cartões reais ou credenciais de pagamento utilizáveis.
- Telefones são gerados em formato brasileiro, sem consulta ou tentativa de identificar linhas reais.
- Endereços/CEPs podem ser consultados em bases públicas. A API oficial de Busca CEP dos Correios exige autenticação/contrato; por isso o frontend usa uma consulta pública de CEP para não expor credenciais.
