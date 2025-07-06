# 🚀 Projeto: Página de Login com React, TypeScript e Testes

> Este projeto é uma demonstração completa de como criar um componente de login funcional em React, partindo do zero. O foco principal foi a configuração de um ambiente de testes robusto com Jest e React Testing Library, passando por um processo de depuração realista para garantir a integração perfeita entre as ferramentas modernas (Vite, TypeScript, Babel).

O resultado é um boilerplate sólido e bem configurado, pronto para ser a base de aplicações mais complexas.

---

## ✨ Funcionalidades

- **Componente de Login**: Formulário completo com campos para e-mail, senha e botão de submissão.
- **Gerenciamento de Estado**: Controle visual do estado de `loading`, e exibição de mensagens de erro ou sucesso.
- **Testes Abrangentes**: Cobertura de testes unitários e de integração que validam:
  - A renderização inicial do formulário.
  - A digitação do usuário nos campos de input.
  - O fluxo de falha no login com a exibição da mensagem de erro correta.
  - O fluxo de sucesso no login com a exibição da mensagem de boas-vindas.
- **Estilização Isolada**: Uso de CSS Modules para garantir que os estilos do componente não afetem o resto da aplicação.

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite** (Ambiente de desenvolvimento)
- **TypeScript**
- **Jest** (Plataforma de testes)
- **React Testing Library** (Para testar os componentes React)
- **Babel** (Para transpilar o código para o ambiente de testes)
- **CSS Modules**

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

**1. Pré-requisitos:**
   - [Node.js](https://nodejs.org/) (versão 18 ou superior)
   - [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

**2. Instale as dependências:**
   ```bash
   npm install
   ```

**3. Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

**4. Acesse a aplicação:**
   Abra seu navegador e vá para `http://localhost:5173`.

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o aplicativo em modo de desenvolvimento com Hot-Reloading.
- `npm run build`: Gera a versão de produção otimizada na pasta `dist/`.
- `npm run test`: Executa a suíte de testes completa com o Jest e exibe os resultados no terminal.

## 📂 Estrutura de Arquivos Relevantes

```
minha-pagina-login/
├── babel.config.cjs           # Configuração do Babel para os testes
├── jest.config.ts             # Configuração principal do Jest
├── jest.setup.ts              # Arquivo de setup para o Jest (ex: jest-dom)
├── tsconfig.json              # Configuração geral do TypeScript
├── vite.config.ts             # Configuração do Vite
└── src/
    ├── components/
    │   └── LoginPage/
    │       ├── LoginPage.tsx          # O componente React da página de login
    │       ├── LoginPage.module.css   # Os estilos CSS do componente
    │       └── LoginPage.test.tsx     # Os testes do componente
    ├── App.tsx                    # Componente raiz que renderiza a LoginPage
    └── main.tsx                   # Ponto de entrada da aplicação
```