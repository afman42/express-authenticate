import { Request, Response, NextFunction } from 'express'
import jsonwebtoken from 'jsonwebtoken'

export default function jsonWebTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  let getCookie = req.signedCookies
  // let getCookie = req.signedCookies
  // console.log(getCookie);
  if (getCookie == null) return res.sendStatus(401)
  jsonwebtoken.verify(getCookie.jwt, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403)
    // console.log(user)
    req.user = {
      id: user.user_id
    }

    next()
  })
}