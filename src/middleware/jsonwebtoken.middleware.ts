import { Request, Response, NextFunction} from 'express'

export default function jsonWebTokenMiddleware(req: Request, res: Response, next: NextFunction){
  let getCookie = req.cookies
  console.log(getCookie);
}