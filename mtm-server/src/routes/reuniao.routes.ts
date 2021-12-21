import { Router, Request, Response } from "express";
import { ReuniaoController } from "../controllers/reuniao.controller";
import { Reuniao } from "../models/reuniao";
import { Usuario } from "../models/usuario";


const reuniaoRouter = Router();

const reuniaoController = new ReuniaoController();

reuniaoRouter.route("/")
  .get((req: Request, res: Response) => {
    let reunioes = reuniaoController.getMeetings();
    return res.json({ reunioes });
  })
  .post((req: Request, res: Response) => {
    let reuniao: Reuniao = req.body.Reuniao;
    let usuario: Usuario = new Usuario();
    const newReuniao = reuniaoController.addMeeting(reuniao, usuario);

    if (newReuniao) {
      return res.json({ mensagem: "Reunião criada com sucesso!" });
    }

    return res.status(409).json({ err: "Não foi possível criar a reunião." });
  })
export default reuniaoRouter;