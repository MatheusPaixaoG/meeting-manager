import { Router, Request, Response } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { Usuario } from "../models/usuario";

const usuarioRouter = Router();
const usuarioController = new UsuarioController();

usuarioRouter.route("/")
  .get((req: Request, res: Response) => {
    let usuarios = usuarioController.getUsers();
    return res.json({ usuarios });
  })
  .post((req: Request, res: Response) => {
    let usuario: Usuario = req.body.Usuario;
    const newUsuario = usuarioController.addUser(usuario);
    if (newUsuario) {
      return res.json({ message: "Usuário criado com sucesso" });
    }

    return res.status(409).json({ err: "Não foi possível criar o usuário" });
  })
usuarioRouter.route("/:id")
  .get((req: Request, res: Response) => {
    let activeUser = usuarioController.getActiveUser();
    return res.json({ activeUser });
  })
  .put((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let usuario: Usuario = req.body.Usuario;
    let usuarioAtivo = usuarioController.setActiveUser(usuario.id);

    return res.json({ message: "usuario adicionado como ativo" });

  })
export default usuarioRouter;