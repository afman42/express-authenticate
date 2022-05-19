import { Router} from 'express'
import { protectedController } from '../controllers';
import jsonWebTokenMiddleware from '../middleware/jsonwebtoken.middleware';
// import { AuthRepository } from '../repository';

const router = Router()
const proteController = new protectedController()

router.get('/',jsonWebTokenMiddleware, proteController.index.bind(proteController))

export const ProtectedRouter = router;