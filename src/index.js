const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();
const port = 3000;
const routes = require('./routes');
const db = require('./config/db');
//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//http logger

app.use(morgan('combined'));


app.use(methodOverride('_method'))
    // template engine
app.engine('.hbs', handlebars({
    extname: '.hbs',

    helpers: {
        sum: (a, b) => a + b,
    }


}), );
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.json());
app.use(express.urlencoded());
// chạy thì bấm npm start
//đường đi;
// routes init
routes(app);


//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});