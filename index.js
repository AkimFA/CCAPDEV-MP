const dotenv = require(`dotenv`);
const express = require(`express`);
const hbs = require(`hbs`);
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const db = require(`./models/db.js`);
const exphbs = require('express-handlebars');
const moment = require('moment');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
const path = require('path');


dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultView: 'index',
    partialsDir: path.join(__dirname, '/views/partials'),
    helpers: {
      preview: function(str) {
        if (str.length > 100)
          return str.substring(0,100) + '...';
        return str;
      },
      dateFormat: function(context, block) {
        var f = block.hash.format || "MMMM DD YYYY, h:mm a";
        return moment(new Date(context), "YYYY-MM-DDTHH:mm:ss.SSSZ").format(f);
      }
    }
  }));



  
app.use(express.static(`public`));
app.use(`/`, routes);

db.connect();

app.listen(port, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + port);
});
