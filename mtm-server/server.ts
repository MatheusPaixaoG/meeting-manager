import express from 'express';
import muralRouter from './src/routes/mural.routes';
import reuniaoRouter from './src/routes/reuniao.routes';
import userRouter from './src/routes/user.routes';
import usuarioRouter from './src/routes/usuario.routes';

const app = express();
const port = 3000;

app.use(express.json());
//app.use('/mural', muralRouter);
//app.use('/reunioes', reuniaoRouter);
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`);
});