
## Оболочкии запуск проекта

1) устанавливаем nmp и библиотеку node.js. Все необходимые лайнчеры можно найти https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 
2) разворачиваем CLI nest .В кнсоли прописываем   npm i -g @nestjs/cli 
3) разворачиваем npm install

## Установка необходимых зависимостей

4) разворачиваем БД. 
  1) npm install --save @nestjs/sequelize sequelize sequelize-typescript
  2) npm install --save pg pg-hstore
  3) npm install --save-dev @types/sequelize
  4) устанавливаем пакет для postgreSQL https://www.enterprisedb.com/postgresql-tutorial-resources-training?uuid=db55e32d-e9f0-4d7c-9aef-b17d01210704&campaignId=7012J000001NhszQAC
  4.4 вводим данные подключение к БД в файл src/appModule.ts в массив SequelizeModule.forRoot. Если используется уже имеющеяся база, то менять ничего не надо.
  4.5 устанавливаем конфигуратор npm i @nestjs/config


5) Документация. Устанавливаем пакет  npm i @nestjs/swagger swagger-ui-express 
6) распаковываем npm i --save @nestjs/jwt
7) распаковка npm install bcryptjs
8) распаковываем npm i class-validator class-transformer
9) распаковываем npm i uuid
10) для просмотра файлов распаковываем npm install --save @nestjs/serve-static
11) установить Docker https://www.docker.com/products/docker-desktop 
12) распаковываем install -U docker-compose

## Запуск приложения

Для того, чтобы запустить проект вводим в консоли nmp run start:dev