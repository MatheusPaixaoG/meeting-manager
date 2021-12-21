import { Router, Request, Response } from "express";
import { ReuniaoController } from "../controllers/reuniao.controller";
import { UsuarioController } from "../controllers/usuario.controller";
import { Reuniao } from "../models/reuniao";
import { Usuario } from "../models/usuario";

const usuarioRouter = Router();
const usuarioController = new UsuarioController();
const reuniaoController = new ReuniaoController();

usuarioRouter.route("/")
  .get((req: Request, res: Response) => {
    let usuarios = usuarioController.getUsers();
    return res.json({ usuarios });
  })
  .post((req: Request, res: Response) => {
    let usuario: Usuario = req.body;
    const newUsuario = usuarioController.addUser(usuario);
    if (newUsuario) {
      return res.json({ message: "Usuário criado com sucesso" });
    }

    return res.status(409).json({ err: "Não foi possível criar o usuário" });
  })
usuarioRouter.route("/:id")
  .get((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let activeUser = usuarioController.getActiveUserById(id);

    if (!activeUser) {
      return res.status(404).json({ err: "Usuário não encontrado" });
    }

    return res.json({ activeUser });
  })
  .post((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
    let usuario = usuarioController.getUserById(id);
    let usuarioAtivo = usuarioController.addActiveUser(usuario);

    return res.json({ message: "usuario adicionado como ativo" });

  })
  .put((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);

    let nome: string = req.body.nome;
    let senha: string = req.body.senha;

    let updateUser = usuarioController.update(id, nome, senha);

    if (!updateUser) {
      return res.status(404).json({ err: "Usuário não encontrado" });
    }

    return res.status(200).json({ success: "Usuário atualizado com sucesso" });
  })
  .delete((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);

    let deleteUser = usuarioController.deleteUser(id);

    if (!deleteUser) {
      return res.status(404).json({ err: "Usuário não encontrado" });
    }

    return res.status(200).json({ success: "Usuário deletado com sucesso" });
  })
usuarioRouter.route("/:id/reunioes")
  .get((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let activeUser = usuarioController.getActiveUserById(id);
    let reunioes = reuniaoController.getMeetings(activeUser);

    return res.json({ reunioes });
  })
  .post((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let reuniao: Reuniao = req.body.Reuniao;
    let activeUser = usuarioController.getActiveUserById(id);
    reuniao.participantes.push(activeUser.id);
    const newReuniao = reuniaoController.addMeeting(reuniao, activeUser);

    if (newReuniao) {
      return res.json({ mensagem: "Reunião criada com sucesso!" });
    }

    return res.status(409).json({ err: "Não foi possível criar a reunião." });
  })
  .delete((req: Request, res: Response) => {
    let reuniao: Reuniao = req.body.Reuniao;
    let id: number = parseInt(req.params.id);
    let activeUser = usuarioController.getActiveUserById(id);
    let deleteMeeting = reuniaoController.deleteMeeting(reuniao.id, activeUser);

    if (!deleteMeeting) {
      return res.status(404).json({ err: "Reunião não encontrada" });
    }

    return res.status(200).json({ success: "Reunião deletada com sucesso" });
  })
export default usuarioRouter;