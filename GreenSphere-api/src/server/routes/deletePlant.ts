import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

router.delete("/:id", async (req: Request, res: Response) =>{
    try {
        const id = Number(req.params.id)
        const plantToDelete = await prisma.plant.delete({where: {id}})
        res.status(200).json(plantToDelete)
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar a planta"})
    }
})

export default router