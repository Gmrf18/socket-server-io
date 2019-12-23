import { Router, Request, Response } from "express";


const router = Router();

router.get('/messages', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'App funcionando'
  })
})

router.post('/messages/:id', (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo
  const id = req.params.id
  res.json({
    ok: true,
    message: `cuerpo ${cuerpo} :, id :${id}`
  })
})

export default router;