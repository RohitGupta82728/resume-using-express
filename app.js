const express = require('express');
const web = require('./routes/web');

const app = express();
const port = process.env.PORT||3000;

app.set('views','./views');
app.set('view engine','ejs');


app.use(express.static('public'));

app.use('/',web);

app.listen(port,()=>{
    console.log(`Server is running at Port: http://localhost:${port}`);
});