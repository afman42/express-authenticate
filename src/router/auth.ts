import { Request, Response, Router} from 'express'
import { AuthController } from '../controllers';
import { AuthRepository } from '../repository';
import dtoValidationMiddleware from '../middleware/dto-validation.middleware';
import { UserRegisterDto, UserSignUpDto } from '../dto';

const router = Router()
const userController = new AuthController(new AuthRepository())

router.get('/',(req: Request, res: Response) => {
  res.send('User');
})
// router.post('/',userController.add.bind(userController))
router.post('/register',dtoValidationMiddleware(UserRegisterDto), userController.register.bind(userController))
router.post('/login',dtoValidationMiddleware(UserSignUpDto), userController.login.bind(userController))

export const AuthRouter = router;