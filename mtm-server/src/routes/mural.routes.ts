import { Router, Request, Response } from "express";
import { MuralController } from "../controllers/mural.controller";
import { Recado } from "../models/Recado";

const muralRouter = Router();

const muralController = new MuralController();

muralRouter.route("/")
// .get((req: Request, res: Response) => {
//   let messages = muralController.getMessages();
//   return res.json({ messages });
// })
// .post((req: Request, res: Response) => {
//   let recado: Recado = req.body.Recado;
//   const newRecado = muralController.addMessage(recado);

//   if (newRecado) {
//     return res.json({ mensagem: "Recado criado com sucesso!" });
//   }

//   return res.status(409).json({ err: "Descrição inválida" });
// })
export default muralRouter;