# Usa una imagen base que soporte Java 17
FROM mcr.microsoft.com/vscode/devcontainers/java:0-17

# Instala Node.js y Angular CLI
RUN apt-get update && apt-get install -y nodejs npm
RUN npm install -g @angular/cli

# Establece el directorio de trabajo
WORKDIR /workspace
