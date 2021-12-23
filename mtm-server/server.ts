import express from 'express';
import muralRouter from './src/routes/mural.routes';
import reuniaoRouter from './src/routes/reuniao.routes';
import usuarioRouter from './src/routes/usuario.routes';

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});

app.use(express.json());
//app.use('/mural', muralRouter);
//app.use('/reunioes', reuniaoRouter);
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`);
});