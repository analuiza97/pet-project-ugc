![Americanas SA](https://empbraatsstorage.blob.core.windows.net/atslogos/2b8b6812-a97b-4353-9247-31a0a70ea680_4.png)

# Projeto PET - Catálogo Front UGC

## Índice

1. [Introdução](#Introdução)
2. [Tecnologias](#Tecnologias)
1. [Scripts do projeto](#Scripts-do-projeto)

## Introdução

 Projeto desenvolvido para o Pet Project do time Catálogo UGC.

- Motivação: Impedir que um possível erro lançado faça toda a aplicação quebrar;
- Proposta: Desenvolver uma solução para tratamendo de erros/_exception_ lancadas em tempo de execução;
- Metodologia: Encapsular as _exception_ geradas por qualquer comportamento inesperado na arvore de componentes descendentes do **error boundary** - solução.

- [Ana Luíza Fontes](http://gitlab.internal.b2w.io/ana.fontes1)
- [Cleonildo Soares Guimarães Junior](http://gitlab.internal.b2w.io/cleonildo.junior1)

## Tecnologias

- [x] Babel
- [x] Eslint
- [x] Git
- [x] JavaScript - ES6
- [x] Nextjs
- [x] Reactjs
- [x] Styled Components

## Scripts do projeto

Para executar qualquer um dos scripts abaixo, presumi-se que o Node.js e o NPM estejam préviamente instalados no ambiente em questão. Caso contrário, você pode fazer a instalação do Node.js clicando no link de download abaixo.

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

**NOTA:** O gerenciador de dependência NPM já vem instalado por padrão no Node.js. Entretanto, se você preferir trabalhar com o YARN, basta rodar o seguinte comando no terminal após concluir a instalação do Node.js. Para mais detalhes, acesse a [documentação de instalação do Yarn](https://classic.yarnpkg.com/en/docs/install).

    npm i -g yarn

### Instalação das dependências do projeto

Para fazer a instalação de todas as dependências da aplicação, execute a seguinte linha de comando no terminal.

    npm i

**Nota**: Se após a instalação você receber informações de vulnerabilidades nas dependências instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades.

    npm audit fix && npm audit fix --force

### Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependências da aplicação, é possível executar o projeto em modo de desenvolvimento. execute o seguinte comando:

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido. A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

### Modo produção

Este comando cria os arquivos de produção dentro do diretório ./.next, e inicia um servidor Express gerenciado pelo Next.js para servir a aplicação em questão. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run start

### Construção do projeto

Este comando cria os arquivos de produção para dentro do diretório `./.next`.
Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run build

### Exportar projeto

Este comando cria os arquivos de produção para dentro do diretório `./.out`.
Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run export

### Limpeza do projeto

Este comando faz uma limpeza nos arquivos criados localmente. Alguns arquivos são criados automaticamente pelo próprio Next e/ou Node.js. Se você precisar dar um reset/limpar o projeto, execute o seguinte comando no terminal:

    npm run clean
