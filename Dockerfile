FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular application with Apache
FROM httpd:2.4
COPY --from=build /app/dist/me-page /usr/local/apache2/htdocs/