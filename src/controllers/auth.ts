import {Request, Response} from 'express'
import { IAuth } from '../interface';
import { AuthRepository } from '../repository';

export class AuthController {

  constructor(
    private authRepository: AuthRepository
  ){}

  // login(req: Request, res: Response){

  // }

  async register(req: Request, res: Response){
    const {
      email,
      password
    }: IAuth = req.body
    res.send(await this.authRepository.checkEmail(req.body.email));
    // res.send(await this.authRepository.find());
    
  }
}