
# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./
COPY cypress.config.js ./
COPY ./cypress ./cypress

# Instalar dependências
RUN npm install

# Comando para rodar os testes
CMD ["npx", "cypress", "run"]
