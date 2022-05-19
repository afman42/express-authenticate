import { Request, Response } from "express";

export class protectedController {

  index(req: Request, res: Response){
    console.log('ss')
  }
}