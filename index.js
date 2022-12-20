import express from 'express';
import session from 'express-session';

const app = express();

// app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true}
}));


app.listen(3000,()=>{console.log('Estou escutando na porta 3000')})