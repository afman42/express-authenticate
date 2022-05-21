import { Request, Response } from "express";
import { ProtecRepository } from "../repository";

export class protectedController {

  constructor(private protecRepository: ProtecRepository){}

  async index(req: Request, res: Response){
    try {
      const { id } = req.user
      // console.log('id',id)
      const user = await this.protecRepository.findUser(id);
      if (!user) {
        return res.status(404).json({
          message: "The User Not Found"
        })
      }
      return res.json({
        message: "The User Found",
        user
      })
    } catch (error) {
      console.log(error) 
      res.status(400).json({
        message: "Something Went Wrong"
      })
    }
  }
}