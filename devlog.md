# Nfc app

* Node js
* Express
* Socket io
* Mongo DB + Mongoose ORM
* express-validation
* Angular
* Jasmine unit tests

# Tutorials:
http://code.tutsplus.com/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168
http://www.slideshare.net/huseyinbabal/complete-mvc-on-node-js-27877254
https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton
Angular
https://devdactic.com/improving-rest-with-ngresource/

# Express generator
http://expressjs.com/en/starter/generator.html
npm install express-generator -g
express --hbs --git nfcapp
npm start
MUMS: https://www.npmjs.com/package/express-validation

# Sockets with express generator
http://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www

# Jasmine unit tests
npm install -g jasmine-node
jasmine-node tests

# Mongoose
http://mongoosejs.com/docs/guide.html
http://mongoosejs.com/docs/populate.html

# Mongo shell
mongo
show dbs
user mydb
db.users.drop()

# Nfc
https://learn.sparkfun.com/tutorials/sparkfun-rfid-starter-kit-hookup-guide

# REST
GET /api/users

GET /api/users/666

POST /api/users
{
  "rfid": "666",
  "userInfo": {
    "firstName": "Fredrik",
    "lastName": "Stolpe2",
    "email": "xxx@xxx.xx"
  }
}

GET /api/users/666/drinkTickets

PUT /api/users/666/drinkTickets
{ "drinkTickets": "3" }