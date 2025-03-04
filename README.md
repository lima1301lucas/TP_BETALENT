# 🚀 Teste Técnico Front-end BeTalent

Este projeto consiste na criação de uma interface web para exibição de uma tabela dinâmica de funcionários. Os dados são consumidos de uma API simulada, permitindo a visualização das informações. A aplicação é totalmente responsiva e conta com funcionalidades de filtragem, permitindo buscar funcionários pelo nome, cargo ou telefone.

---
<br>

## 🛠️ Pré-requisitos

[Node.js](https://nodejs.org/pt-br/download) na versão ^22.12.0
```diff
node -v
```
npm na versão ^10.9.0
```diff
npm -v
```

Além disso, este projeto utiliza as seguintes tecnologias:

- **React com Vite**
- **TypeScript**
- **Json-server**
- **React Toastify**

---
<br>

## 🚀 Como executar o projeto

### 1️⃣ Clone o repositório
```sh
git clone https://github.com/lima1301lucas/TP_BETALENT.git
```

### 2️⃣ Navegue até a pasta com o comando cd + nome da pasta

```sh
cd nome-da-pasta
```

### 3️⃣ Instale as dependências
```sh
npm install
```

### 4️⃣ Inicie o json-server (API simulada)
```sh
json-server --watch db.json
```
Observação: Caso você tenha problemas com o json-server, tente rodá-lo com: `npx json-server db.json` ou `yarn json-server <path>/db.json` (Substitua o `<path>` pelo caminho completo até o diretório em que o arquivo db.json está localizado.)

### 5️⃣ Verifique a URL da API
Verifique o link da URL que será disponibilizado no terminal e confira se é o mesmo da variável `url` que está no arquivo `employees.tsx`. Se não for o mesmo, mude para o que foi gerado. Aqui está um exemplo de como o código está estruturado:

```typescript
const url = "http://localhost:3000/employees";
const { data: employeesData, loading, error } = useFetch<Employee[]>(url);
```

### 6️⃣ Inicie o projeto
```sh
npm run dev
```
Abra o link gerado no terminal no navegador. Assim que abrir, você deverá ver uma tela com um cabeçalho e uma tabela contendo informações de funcionários.

---
<br>

## ✨ Funcionalidades do projeto
**Filtragem de dados:** O usuário pode visualizar os dados presentes na tabela e filtrar as informações pelo **nome**, **cargo** ou **telefone**.  
  - Para filtrar, basta digitar algo no campo de "**Pesquisar**" e clicar na lupa à direita.  
  - Caso nenhum resultado seja encontrado, a tabela exibirá todos os dados e uma notificação aparecerá no canto inferior direito com a mensagem:  `"Nenhum registro encontrado"`
  - Para limpar o filtro, basta recarregar a página ou limpar o campo de pesquisa e clicar na lupa novamente.

---
<br>

## 🛠️ Tecnologias utilizadas
- React com Vite - Para a construção da interface.
- TypeScript - Para adicionar a lógica.
- Json-server - Para simular uma API.
- React Toastify - Para exibir notificações.
