
# Usar imagem oficial Node.js
FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do projeto
COPY . .

# Rodar os testes quando o container iniciar
CMD ["npm", "test"]
