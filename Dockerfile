# Use a versão compatível do Node.js
FROM node:18.17.0

# Defina o diretório de trabalho no container
WORKDIR /app

# Primeiro, copie apenas os arquivos de definição de dependências
COPY package.json package-lock.json ./
COPY yarn.lock ./

# Instale as dependências
RUN npm install
# Se estiver usando Yarn, comente a linha acima e descomente a linha abaixo
# RUN yarn install --frozen-lockfile

# Agora, copie o resto dos arquivos do projeto
COPY . .

# Construa a aplicação Next.js para produção
RUN npm run build
# Para Yarn, use:
# RUN yarn build

# Informe a porta que o container deverá expor
EXPOSE 3000

# Execute a aplicação Next.js em modo de produção
CMD ["npm", "start"]
# Para Yarn, use:
# CMD ["yarn", "start"]
