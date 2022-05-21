import { Request, Response } from 'express'
import { UserRegisterDto, UserSignUpDto } from '../dto';
import { AuthRepository } from '../repository';
import jsonwebtoken from 'jsonwebtoken'

export class AuthController {

  constructor(
    private authRepository: AuthRepository
  ) { }

  async login(req: Request, res: Response) {
    try {

      const data: UserSignUpDto = req.body;
      const user = await this.authRepository.checkEmail(data.email);
      if (!user) {
        return res.status(400).json({
          message: "The User Not Found"
        })
      }
      const checkPass = await this.authRepository.checkPassword(data.password, user.password);
      if (!checkPass) {
        return res.status(400).json({
          message: "The Password Invalid"
        })
      }
      const token = jsonwebtoken.sign(
        { user_id: user.id },
        process.env.JWT_SECRET)
      if (token) {
        res.cookie('jwt', token, { maxAge: 180000, httpOnly: true, signed: true})
        return res.json({
          message: "Successfull Login"
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        message: "Something Went Wrong"
      })
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data: UserRegisterDto = req.body
      const user = await this.authRepository.add(data);
      if (!user) {
        return res.status(400).json({
          message: "Failed Create Account"
        })
      }
      return res.status(201).json({
        messsage: "Save Create Account"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something Went Wrong"
      })
    }
  }

  logout(_: Request, res: Response){
    let s = res.cookie('jwt', "", { maxAge: 0, httpOnly: true, signed: true, expires: new Date() })
    console.log(s)
    return s
  }
}