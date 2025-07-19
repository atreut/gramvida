# 📦 Gramvida — Site Institucional

> Aplicação web institucional para a marca **GRAM-VIDA**, desenvolvida com Vue 3 + Vite + TailwindCSS, containerizada com Docker e orquestrada com Docker Compose.

---

## 🚀 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [ESLint + Prettier](https://eslint.org/)
- Docker e Docker Compose para orquestração:
  - **nginx** (servidor web)
  - **web** (aplicação Vue rodando em modo dev ou build)
  - (opcional) MariaDB, phpMyAdmin e cron jobs comentados

---

## 📂 Estrutura de Containers

| Serviço   | Descrição              | Porta Exposta |
| --------- | ---------------------- | ------------- |
| **nginx** | Servidor Web reverso   | 80 / 443      |
| **web**   | Aplicação Vue (`vite`) | 8080          |

O `.env` define as variáveis como `APP_CODE_PATH_HOST`, `NGINX_HOST_HTTP_PORT`, etc.

---

## 🧰 Pré-requisitos

✅ [Git](https://git-scm.com/)  
✅ [Docker](https://www.docker.com/)  
✅ [Docker Compose](https://docs.docker.com/compose/)

---

## 👨‍💻 Como rodar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/atreut/gramvida.git
cd gramvida
```

### 2️⃣ Configure o `.env`

Crie ou edite o arquivo `.env` na raiz do projeto com as variáveis necessárias.  
Exemplo básico:

```env
APP_CODE_PATH_HOST=./
APP_CODE_PATH_CONTAINER=/var/www
APP_CODE_CONTAINER_FLAG=
NGINX_SITES_PATH=./nginx/sites
LETSENCRYPT_PATH=./letsencrypt
CERTBOT_PATH=./certbot
NGINX_HOST_HTTP_PORT=80
NGINX_HOST_HTTPS_PORT=443
NETWORKS_DRIVER=bridge
VOLUMES_DRIVER=local
```

---

### 3️⃣ Construa e suba os containers

```bash
docker-compose up -d --build
```

Acesse a aplicação em: [http://localhost:8080](http://localhost:8080)

---

### 4️⃣ Acompanhe os logs (opcional)

```bash
docker-compose logs -f

```
