# Указываем аргумент с версией Node.js
ARG NODE_VERSION=20-alpine

##
## Этап сборки
##
FROM node:${NODE_VERSION} AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package файлы
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем приложение
COPY . .

# Сборка Nuxt-приложения
RUN npm run build


##
## Этап Production
##
FROM node:${NODE_VERSION}

# Устанавливаем рабочую папку
WORKDIR /app

# Устанавливаем только продакшн-зависимости
COPY package*.json ./
RUN npm ci --omit=dev

# Копируем результат сборки из билдер-стадии
COPY --from=builder /app/.output ./.output

# Установка переменных окружения
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Порт, который будет слушать приложение
EXPOSE 3000

# Запуск сервера
CMD ["node", ".output/server/index.mjs"]
