# ---------- Next.js Frontend (Development Mode over HTTP) ----------
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

# Force Vite to run in HTTP mode (no SSL)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--https", "true", "--key", "key.pem", "--cert", "cert.pem"]



