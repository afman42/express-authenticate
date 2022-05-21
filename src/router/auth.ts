import { Router} from 'express'
import { AuthController } from '../controllers';
import { AuthRepository } from '../repository';
import dtoValidationMiddleware from '../middleware/dto-validation.middleware';
import { UserRegisterDto, UserSignUpDto } from '../dto';
// import jsonWebTokenMiddleware from '../middleware/jsonwebtoken.middleware';

const router = Router()
const userController = new AuthController(new AuthRepository())

router.post('/logout',userController.logout.bind(userController))
router.post('/register',dtoValidationMiddleware(UserRegisterDto), userController.register.bind(userController))
router.post('/login',dtoValidationMiddleware(UserSignUpDto), userController.login.bind(userController))

export const AuthRouter = router;