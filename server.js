const express = require('express');
const routes = require('./routes');
// call ./config/connection.js
// this will connect to the mysql database, ecommerce_db.
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
/* this will call:
  ./routes/index.js
    ./routes/api/category-routes.js
    ./routes/api/product-routes.js
    ./routes/api/tag-routes.js
*/
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
