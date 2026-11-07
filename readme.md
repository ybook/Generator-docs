# Generator

Uma coleção de geradores de dados fictícios com cálculos reais e ferramentas simples para desenvolvimento, testes e prototipação. O projeto roda direto no navegador, sem instalação de dependências.

## O que tem por aqui

- **Geradores:** CPF, CNPJ, RG, CNH, título eleitoral, pessoas, empresas, CEP, endereços, celulares e chassi.
- **Codificadores:** Base32, Base58, Base64, ASCII85, URL, hexadecimal, binário, ROT13, ROT47, Atbash e Morse.
- **Hashes:** SHA-256 e SHA-512.
- **Decodificador automático:** tenta identificar e decodificar formatos reversíveis.

As ferramentas de codificação e decodificação processam o texto no navegador. A busca de cidades e endereços consulta serviços externos e, por isso, precisa de conexão com a internet. Os demais dados são fictícios e não devem ser usados como documentos ou informações reais.

## Como iniciar pelo terminal

É preciso ter o [Node.js](https://nodejs.org/) instalado. No terminal, entre na pasta do projeto e execute:

```bash
npx serve .
```

Na primeira execução, o `npx` pode pedir confirmação para baixar o `serve`. Depois, abra no navegador o endereço exibido no terminal (geralmente [http://localhost:3000](http://localhost:3000)). Para encerrar o servidor, pressione `Ctrl+C`.

> Se o comando `py` não estiver disponível no Windows, tente `python -m http.server 8000`.

## Tecnologias

HTML, CSS e JavaScript, sem frameworks ou dependências de terceiros.
