import { Request, Response, Router} from 'express'
import { AuthController } from '../controllers';
import { AuthRepository } from '../repository';

const router = Router()
const userController = new AuthController(new AuthRepository())

router.get('/',(req: Request, res: Response) => {
  res.send('User');
})
// router.post('/',userController.add.bind(userController))
router.post('/register',userController.register.bind(userController))

export const AuthRouter = router;