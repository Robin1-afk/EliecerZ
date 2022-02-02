const express = require('express');
const port = (process.env.port || 3000);
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());
app.set('port', port);

app.use('/calendary', require('./rutas/rutasCalendary'));
app.use('/personal', require('./rutas/rutasPersonal'));


app.listen(app.get('port'), (error)=>{
    if(error) throw error;
    console.log('Server conecct in port :' + port)
});
 