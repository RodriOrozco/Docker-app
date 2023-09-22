# Usar la imagen base de Node.js
FROM node:18.18.0
# Establecer el directorio de trabajo en /app
WORKDIR /usr/src/app
# Copiar el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto del código fuente
COPY . .
# Exponer el puerto en el que la aplicación va a ejecutarse
EXPOSE 3000
# Comando para iniciar la aplicación
CMD ["npm", "start"]
